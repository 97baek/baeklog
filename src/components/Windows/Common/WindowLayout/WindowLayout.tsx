import React, { useEffect, useRef, useState } from 'react';
import TopBar from '@components/Windows/Common/TopBar';
import { Contents, WindowContainer, WindowWrap } from './styles';

interface IProps {
  icon: string;
  title: string;
  isShowing: number;
  children: React.ReactChild;
}

const Window = ({ icon, title, isShowing, children }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState(false);
  const [direction, setDirection] = useState('');
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [currentSize, setcurrentSize] = useState({ w: 400, h: 300, isFull: false });
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

    // console.log(direction);
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

      if (e.clientX > window.innerWidth) rightWidth = window.innerWidth - currentPos.x;
      if (e.clientX < 0) leftWidth = currentSize.w + currentPos.x;
      if (e.clientY > window.innerHeight - 60)
        bottomHeight = window.innerHeight - 60 - currentPos.y;
      if (e.clientY < 0) topHeight = currentSize.h + currentPos.y;

      if (direction === 'rt') {
        const width = e.clientX - currentPos.x;
        const height = currentSize.h + currentPos.y - e.clientY;
        if (width > 300 && height > 30) {
          setcurrentSize({ w: width, h: height, isFull: currentSize.isFull });
          setCurrentPos({ x: currentPos.x, y: e.clientY });
        }
      } else if (direction === 'rb') {
      } else if (direction === 'right') {
        if (rightWidth > 300)
          setcurrentSize({ w: rightWidth, h: currentSize.h, isFull: currentSize.isFull });
      } else if (direction === 'left') {
        if (leftWidth > 300) {
          setcurrentSize({ w: leftWidth, h: currentSize.h, isFull: currentSize.isFull });
          setCurrentPos({ x: e.clientX, y: currentPos.y });
        }
        if (e.clientX < 0) setCurrentPos({ x: 0, y: currentPos.y });
      } else if (direction === 'top') {
        if (topHeight > 30) {
          setcurrentSize({ w: currentSize.w, h: topHeight, isFull: currentSize.isFull });
          setCurrentPos({ x: currentPos.x, y: e.clientY });
        }
        if (e.clientY < 0) setCurrentPos({ x: currentPos.x, y: 0 });
      } else if (direction === 'bottom') {
        if (bottomHeight > 30)
          setcurrentSize({ w: currentSize.w, h: bottomHeight, isFull: currentSize.isFull });
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

{
  /* <TopBar
startDragPos={startDragPos.current}
delta={delta}
setDelta={setDelta}
originalCoord={originalCoord}
setOriginalCoord={setOriginalCoord}
posX={posX}
posY={posY}
icon={icon}
title={title}
/> */
}
