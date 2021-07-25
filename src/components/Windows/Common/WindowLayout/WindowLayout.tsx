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

  const styleProps = {
    posX: currentPos.x,
    posY: currentPos.y,
  };

  console.log('상위 컴포넌트 position값', styleProps.posX, styleProps.posY);

  return (
    <WindowWrap
      isShowing={isShowing}
      style={{ transform: `translate(${styleProps.posX}px, ${styleProps.posY}px)` }}
    >
      <WindowContainer>
        <TopBar setCurrentPos={setCurrentPos} icon={icon} title={title} />
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
