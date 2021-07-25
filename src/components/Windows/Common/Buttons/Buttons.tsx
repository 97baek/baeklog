import { useWindowContext } from '@hooks/useWindowContext';
import React from 'react';
import { Button, ButtonWrap } from './styles';

interface IProps {
  title: string;
  toggleMaximizingWindow: () => void;
}

const Buttons = ({ title, toggleMaximizingWindow }: IProps) => {
  const [, , , , , , , closeWindow, , minimizeWindow] = useWindowContext();

  return (
    <ButtonWrap>
      <Button onClick={() => minimizeWindow(title)}>ㅡ</Button>
      <Button onClick={toggleMaximizingWindow}>ㅁ</Button>
      <Button onClick={() => closeWindow(title)}>X</Button>
    </ButtonWrap>
  );
};

export default Buttons;
