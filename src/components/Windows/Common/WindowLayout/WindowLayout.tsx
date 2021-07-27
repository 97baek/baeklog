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

  const onMouseWindow = (e: React.MouseEvent): void => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const left = currentPos.x;
    const right = left + currentSize.w;
    const top = currentPos.y;
    const bottom = top + currentSize.h;

    if (
      (mouseX >= left - 5 && mouseX <= left + 5) ||
      (mouseX >= right - 5 && mouseX <= right + 5)
    ) {
      setCurrentCursor('ew-resize');
    } else if (
      (mouseY >= top - 5 && mouseY <= top + 5) ||
      (mouseY >= bottom - 5 && mouseY <= bottom + 5)
    ) {
      setCurrentCursor('ns-resize');
      console.log('상하');
    } else setCurrentCursor('default');
  };

  const initResizeWindow = (e: React.MouseEvent): void => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const left = currentPos.x;
    const right = left + currentSize.w;
    const top = currentPos.y;
    const bottom = top + currentSize.h;

    if (mouseX >= right - 5 && mouseX <= right + 5) {
      setIsResizing(true);
      setDirection('right');
    } else if (mouseX >= left - 5 && mouseX <= left + 5) {
      setIsResizing(true);
      setDirection('left');
    } else if (mouseY >= top - 5 && mouseY <= top + 5) {
      setIsResizing(true);
      setDirection('top');
    } else if (mouseY >= bottom - 5 && mouseY <= bottom + 5) {
      setIsResizing(true);
      setDirection('bottom');
    }
  };

  const updateResizeWindow = (e) => {
    if (isResizing) {
      if (direction === 'right') {
        let width = e.clientX - currentPos.x;
        if (width > 300) setcurrentSize({ w: width, h: currentSize.h, isFull: currentSize.isFull });
      } else if (direction === 'left') {
        let width = currentSize.w + currentPos.x - e.clientX;
        if (width > 300) {
          setcurrentSize({ w: width, h: currentSize.h, isFull: currentSize.isFull });
          setCurrentPos({ x: e.clientX, y: currentPos.y });
        }
      } else if (direction === 'top') {
        let height = currentSize.h + currentPos.y - e.clientY;
        if (height > 30) {
          setcurrentSize({ w: currentSize.w, h: height, isFull: currentSize.isFull });
          setCurrentPos({ x: currentPos.x, y: e.clientY });
        }
      } else if (direction === 'bottom') {
        let height = e.clientY - currentPos.y;
        if (height < 30) height = 30;
        setcurrentSize({ w: currentSize.w, h: height, isFull: currentSize.isFull });
      }
    }
  };

  const endResizeWindow = (e) => {
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
