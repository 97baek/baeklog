import React from 'react';
import { DesktopShortcutButton } from './styles';
import { useWindowContext } from '@hooks/useWindowContext';

const DesktopShortcut = () => {
  const [, , , , , , , , , minimizeWindow] = useWindowContext();

  const onClickDesktopShortcut = () => {
    minimizeWindow('profile');
    minimizeWindow('projects');
    minimizeWindow('blog');
  };

  return <DesktopShortcutButton onClick={onClickDesktopShortcut}></DesktopShortcutButton>;
};

export default DesktopShortcut;
