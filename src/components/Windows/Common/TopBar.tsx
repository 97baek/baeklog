import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from './Buttons';

interface IProps {
  icon: string;
  title: string;
  setCurrentPos: any;
  setCurrentSize: any;
  currentSize: { w: number; h: number; isFull: boolean };
}

const TopBar = ({ icon, title, setCurrentPos, setCurrentSize, currentSize }: IProps) => {
  const [prevSize, setPrevSize] = useState({ w: currentSize.w, h: currentSize.h });
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const TASKBARHEIGHT = 60;

  const toggleMaximizingWindow = () => {
    if (!currentSize.isFull) {
      setPrevSize({ w: currentSize.w, h: currentSize.h });
      setCurrentSize({ isFull: true });
    } else {
      setCurrentSize({ w: prevSize.w, h: prevSize.h, isFull: false });
    }
  };

  const initWindowMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (currentSize.isFull) return;
    e.preventDefault();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const windowPos = ref.current?.getBoundingClientRect();
    const windowX = windowPos?.x;
    const windowY = windowPos?.y;

    let gapX = mouseX - windowX;
    let gapY = mouseY - windowY;

    setIsMoving(true);
    setDelta({ x: gapX, y: gapY });
  };

  const updateWindowMove = (e: MouseEvent): void => {
    if (isMoving) {
      e.preventDefault();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const gapX = delta.x;
      const gapY = delta.y;
      // console.log(delta);

      let windowX = mouseX - gapX;
      let windowY = mouseY - gapY;

      // 창이 화면 바깥(오른쪽 / 아래)으로 나갔는지 판별하는 변수
      const overflowX = windowX + currentSize.w > window.innerWidth;
      const overflowY = windowY + currentSize.h > window.innerHeight - TASKBARHEIGHT;

      // 창을 오른쪽 / 아래로 맞추기 위한 변수
      const fitXToEnd = window.innerWidth - currentSize.w;
      const fitYToEnd = window.innerHeight - currentSize.h - TASKBARHEIGHT;
      if (windowX < 0) windowX = 0;
      if (windowY < 0) windowY = 0;
      if (overflowX) windowX = fitXToEnd;
      if (overflowY) windowY = fitYToEnd;
      setCurrentPos({ x: windowX, y: windowY });
    }
  };

  const endWindowMove = (e: MouseEvent): void => {
    e.preventDefault();

    window.removeEventListener('mousemove', updateWindowMove);
    window.removeEventListener('mouseup', endWindowMove);
    setIsMoving(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateWindowMove);
    window.addEventListener('mouseup', endWindowMove);
  }, [isMoving]);

  return (
    <Container>
      <Info ref={ref} onMouseDown={initWindowMove} onDoubleClick={toggleMaximizingWindow}>
        {icon}
        <span>{title}</span>
      </Info>
      <Button toggleMaximizingWindow={toggleMaximizingWindow} title={title} />
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  min-width: 300px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid black;
`;

const Info = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  flex-grow: 1;
  padding-left: 5px;
  span {
    margin-left: 8px;
  }
`;

// const initWindowMove = (e) => {
//   console.log('이동시작');
//   setIsDragging(true);
//   console.log(isDragging);
//   startDragPos = { x: e.clientX, y: e.clientY };
//   ref.current?.addEventListener('mousemove', updateWindowMove);
// };

// const updateWindowMove = (e) => {
//   if (!isDragging) return;
//   console.log('이동중');
//   setDelta({
//     x: e.clientX - startDragPos.x,
//     y: e.clientY - startDragPos.y,
//   });
// };

// const endWindowMove = (e) => {
//   console.log('마우스뗌');
//   setIsDragging(false);
//   console.log(isDragging);
//   setOriginalCoord({ x: originalCoord.x + delta.x, y: originalCoord.y + delta.y });
//   startDragPos = { x: 0, y: 0 };
//   setDelta({ x: 0, y: 0 });
//   ref.current?.removeEventListener('mousemove', updateWindowMove);
// };

// const initWindowMove = (e: any) => {
//   e.preventDefault();
//   console.log(ref.current);
//   console.log('마우스클릭');
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   const windowPos = ref.current?.getBoundingClientRect();

//   const windowX = parseInt(windowPos?.x);
//   const windowY = parseInt(windowPos?.y);

//   const gapX = mouseX - windowX;
//   const gapY = mouseY - windowY;
//   setDelta({ x: gapX, y: gapY });
//   console.log(mouseX, mouseY);
//   console.log(windowX, windowY);
//   console.log(gapX, gapY);
//   // setIsDragging(true);

//   const updateWindowMove = (e: any) => {
//     e.preventDefault();
//     // if (isDragging) {
//     console.log('이동중');

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const gapX = delta.x;
//     const gapY = delta.y;

//     const windowX = mouseX - gapX;
//     const windowY = mouseY - gapY;

//     setPosX(windowX);
//     setPosY(windowY);

//     console.log(posX, posY);
//     console.log('마우스', mouseX, mouseY);
//     console.log('윈도우', windowX, windowY);
//     console.log('차이', gapX, gapY);
//     // }
//   };

//   const endWindowMove = (e: any) => {
//     e.preventDefault();
//     window.removeEventListener('mousemove', updateWindowMove);
//     window.removeEventListener('mouseup', endWindowMove);
//     console.log('마우스뗌');
//     // setIsDragging(false);
//   };

//   window.addEventListener('mousemove', updateWindowMove);
//   window.addEventListener('mouseup', endWindowMove);
// };
