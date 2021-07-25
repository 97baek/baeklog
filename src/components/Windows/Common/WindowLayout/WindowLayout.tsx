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

  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [currentSize, setcurrentSize] = useState({ w: 800, h: 600, isFull: false });

  const styleProps = {
    transform: currentSize.isFull
      ? `translate(0px, 0px)`
      : `translate(${currentPos.x}px, ${currentPos.y}px)`,
    width: currentSize.isFull ? '100%' : `${currentSize.w}px`,
    height: currentSize.isFull ? 'calc(100vh - 60px)' : `${currentSize.h}px`,
  };

  return (
    <WindowWrap
      isShowing={isShowing}
      style={{
        transform: styleProps.transform,
        width: styleProps.width,
        height: styleProps.height,
      }}
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
