import { useWindowContext } from '@hooks/useWindowContext';
import { ITaskInfo } from '@typings/taskinfo';
import { Icon, Icons } from './styles';
import React, { useState } from 'react';

interface IProps {
  icons: ITaskInfo[];
}

type IconType = 'profile' | 'projects' | 'blog' | 'window' | string;

const DesktopIcon = ({ icons }: IProps) => {
  const [, , , , , , openWindow, , showWindow] = useWindowContext();
  const [name, setName] = useState('window');

  const onDoubleClickIcon = (icon: string) => {
    openWindow(icon);
    showWindow(icon);
  };

  const onClickIcon = (icon: IconType) => {
    setName(icon);
  };

  return (
    <Icons>
      {icons.map((icon) => (
        <Icon
          style={{ color: 'white' }}
          onClick={() => onClickIcon(icon.name)}
          onDoubleClick={() => onDoubleClickIcon(icon.name)}
          clicked={name === icon.name}
          key={icon.id}
        >
          {icon.name}
        </Icon>
      ))}
    </Icons>
  );
  // return <div>hello</div>;
};

export default DesktopIcon;
