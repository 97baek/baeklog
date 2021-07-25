import React, { useRef, useState } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const [prevSize, setPrevSize] = useState({ w: currentSize.w, h: currentSize.h });

  const toggleMaximizingWindow = () => {
    if (!currentSize.isFull) {
      setPrevSize({ w: currentSize.w, h: currentSize.h });
      setCurrentSize({ isFull: true });
    } else {
      setCurrentSize({ w: prevSize.w, h: prevSize.h, isFull: false });
    }
  };

  const initWindowMove = (e: any) => {
    if (currentSize.isFull) return;
    e.preventDefault();
    console.log(ref.current);
    console.log('마우스클릭');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const windowPos = ref.current?.getBoundingClientRect();

    const windowX = windowPos?.x;
    const windowY = windowPos?.y;

    const gapX = mouseX - windowX;
    const gapY = mouseY - windowY;

    setDelta({ x: gapX, y: gapY });

    window.addEventListener('mousemove', updateWindowMove);
    window.addEventListener('mouseup', endWindowMove);
  };

  const updateWindowMove = (e: any) => {
    e.preventDefault();
    console.log('이동중');
    console.log(delta);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const gapX = delta.x;
    const gapY = delta.y;

    const windowX = mouseX - gapX;
    const windowY = mouseY - gapY;

    setCurrentPos({ x: windowX, y: windowY });
  };

  const endWindowMove = (e: any) => {
    e.preventDefault();
    window.removeEventListener('mousemove', updateWindowMove);
    window.removeEventListener('mouseup', endWindowMove);
    console.log('마우스뗌');
  };

  return (
    <Container>
      <Info ref={ref} onMouseDown={initWindowMove} onDoubleClick={toggleMaximizingWindow}>
        {icon}
        <p>{title}</p>
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
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid black;
`;

const Info = styled.div`
  width: max-content;
  height: 30px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-left: 5px;
  p {
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
