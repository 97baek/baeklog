import { useWindowContext } from '@hooks/useWindowContext';
import React from 'react';

interface IProps {
  title: string;
}

const Button = ({ title }: IProps) => {
  const [, , , , , , , closeWindow, , minimizeWindow] = useWindowContext();
  console.log(title);

  return (
    <>
      <button onClick={() => minimizeWindow(title)}>_</button>
      <button onClick={() => closeWindow(title)}>X</button>
    </>
  );
};

export default Button;
