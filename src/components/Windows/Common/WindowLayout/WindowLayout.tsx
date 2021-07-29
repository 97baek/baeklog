import React, { useEffect, useRef, useState } from 'react';
import TopBar from '@components/Windows/Common/TopBar';
import { Contents, WindowContainer, WindowWrap } from './styles';

interface IProps {
  icon: string;
  title: string;
  isShowing: number;
  children: React.ReactChild;
}

export interface ISize {
  w: number;
  h: number;
  isFull?: boolean;
}

const Window = ({ icon, title, isShowing, children }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState(false);
  const [direction, setDirection] = useState('');
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [currentSize, setcurrentSize] = useState<ISize>({ w: 400, h: 300, isFull: false });
  const [currentCursor, setCurrentCursor] = useState('default');

  const styleProps = {
    transform: currentSize.isFull
      ? `translate(0px, 0px)`
      : `translate(${currentPos.x}px, ${currentPos.y}px)`,
    width: currentSize.isFull ? '100%' : `${currentSize.w}px`,
    height: currentSize.isFull ? 'calc(100vh - 60px)' : `${currentSize.h}px`,
    cursor: currentCursor,
  };

  const isCursorOnEdge = (axis: number, direction: number) => {
    return axis >= direction - 5 && axis <= direction + 5;
  };

  const onMouseWindow = (e: React.MouseEvent): void => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const left = currentPos.x;
    const right = left + currentSize.w;
    const top = currentPos.y;
    const bottom = top + currentSize.h;
    if (
      (isCursorOnEdge(mouseX, right) && isCursorOnEdge(mouseY, top)) ||
      (isCursorOnEdge(mouseX, left) && isCursorOnEdge(mouseY, bottom))
    ) {
      setCurrentCursor('nesw-resize');
    } else if (
      (isCursorOnEdge(mouseX, right) && isCursorOnEdge(mouseY, bottom)) ||
      (isCursorOnEdge(mouseX, left) && isCursorOnEdge(mouseY, top))
    ) {
      setCurrentCursor('nwse-resize');
    } else if (isCursorOnEdge(mouseX, left) || isCursorOnEdge(mouseX, right)) {
      setCurrentCursor('ew-resize');
    } else if (isCursorOnEdge(mouseY, top) || isCursorOnEdge(mouseY, bottom)) {
      setCurrentCursor('ns-resize');
    } else setCurrentCursor('default');
  };

  const initResizeWindow = (e: React.MouseEvent): void => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const left = currentPos.x;
    const right = left + currentSize.w;
    const top = currentPos.y;
    const bottom = top + currentSize.h;

    if (
      isCursorOnEdge(mouseX, right) ||
      isCursorOnEdge(mouseX, left) ||
      isCursorOnEdge(mouseY, top) ||
      isCursorOnEdge(mouseY, bottom)
    ) {
      if (isCursorOnEdge(mouseX, right) && isCursorOnEdge(mouseY, top)) setDirection('rt');
      else if (isCursorOnEdge(mouseX, right) && isCursorOnEdge(mouseY, bottom)) setDirection('rb');
      else if (isCursorOnEdge(mouseX, left) && isCursorOnEdge(mouseY, top)) setDirection('lt');
      else if (isCursorOnEdge(mouseX, left) && isCursorOnEdge(mouseY, bottom)) setDirection('lb');
      else if (isCursorOnEdge(mouseX, right)) setDirection('right');
      else if (isCursorOnEdge(mouseX, left)) setDirection('left');
      else if (isCursorOnEdge(mouseY, top)) setDirection('top');
      else if (isCursorOnEdge(mouseY, bottom)) setDirection('bottom');

      setIsResizing(true);
    }

    console.log(direction);
  };

  const updateResizeWindow = (e: MouseEvent): void => {
    if (isResizing) {
      let rightWidth = e.clientX - currentPos.x;
      let leftWidth = currentSize.w + currentPos.x - e.clientX;
      let topHeight = currentSize.h + currentPos.y - e.clientY;
      let bottomHeight = e.clientY - currentPos.y;

      let mouseX = e.clientX;
      let mouseY = e.clientY;

      if (mouseX > window.innerWidth) rightWidth = window.innerWidth - currentPos.x;
      if (mouseX < 0) {
        leftWidth = currentSize.w + currentPos.x;
        mouseX = 0;
      }
      if (mouseY > window.innerHeight - 60) bottomHeight = window.innerHeight - 60 - currentPos.y;
      if (mouseY < 0) {
        topHeight = currentSize.h + currentPos.y;
        mouseY = 0;
      }

      if (direction === 'rt') {
        if (rightWidth > 300 && topHeight > 30) {
          setcurrentSize({ w: rightWidth, h: topHeight });
          setCurrentPos({ x: currentPos.x, y: mouseY });
        }
      } else if (direction === 'rb') {
        if (rightWidth > 300 && bottomHeight > 30) {
          setcurrentSize({ w: rightWidth, h: bottomHeight });
        }
      } else if (direction === 'lt') {
        if (leftWidth > 300 && topHeight > 30) {
          setcurrentSize({ w: leftWidth, h: topHeight });
          setCurrentPos({ x: mouseX, y: mouseY });
        }
      } else if (direction === 'lb') {
        if (leftWidth > 300 && bottomHeight > 30) {
          setcurrentSize({ w: leftWidth, h: bottomHeight });
          setCurrentPos({ x: mouseX, y: currentPos.y });
        }
      } else if (direction === 'right') {
        if (rightWidth > 300) setcurrentSize({ w: rightWidth, h: currentSize.h });
      } else if (direction === 'left') {
        if (leftWidth > 300) {
          setcurrentSize({ w: leftWidth, h: currentSize.h });
          setCurrentPos({ x: mouseX, y: currentPos.y });
        }
      } else if (direction === 'top') {
        if (topHeight > 30) {
          setcurrentSize({ w: currentSize.w, h: topHeight });
          setCurrentPos({ x: currentPos.x, y: mouseY });
        }
      } else if (direction === 'bottom') {
        if (bottomHeight > 30) setcurrentSize({ w: currentSize.w, h: bottomHeight });
      }
    }
  };

  const endResizeWindow = (e: MouseEvent): void => {
    e.preventDefault();
    window.removeEventListener('mousemove', updateResizeWindow);
    window.removeEventListener('mouseup', endResizeWindow);
    setIsResizing(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateResizeWindow);
    window.addEventListener('mouseup', endResizeWindow);
  }, [isResizing]);

  return (
    <WindowWrap
      isShowing={isShowing}
      style={{
        transform: styleProps.transform,
        width: styleProps.width,
        height: styleProps.height,
        cursor: styleProps.cursor,
        minWidth: '300px',
      }}
      onMouseDown={initResizeWindow}
      onMouseMove={onMouseWindow}
    >
      <WindowContainer>
        <TopBar
          setCurrentPos={setCurrentPos}
          setCurrentSize={setcurrentSize}
          currentSize={currentSize}
          icon={icon}
          title={title}
        />
        <Contents>{children}</Contents>
      </WindowContainer>
    </WindowWrap>
  );
};

export default Window;
