import { useWindowContext } from '@hooks/useWindowContext';
import React from 'react';
import { Button, ButtonWrap } from './styles';

interface IProps {
  title: string;
}

const Buttons = ({ title }: IProps) => {
  const [, , , , , , , closeWindow, , minimizeWindow] = useWindowContext();
  console.log(title);

  return (
    <ButtonWrap>
      <Button onClick={() => minimizeWindow(title)}>ㅡ</Button>
      <Button onClick={() => closeWindow(title)}>X</Button>
    </ButtonWrap>
  );
};

export default Buttons;
