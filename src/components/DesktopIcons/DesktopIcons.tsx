import { useWindowContext } from '@hooks/useWindowContext';
import { ITaskInfo } from '@typings/taskinfo';
import React from 'react';
import DesktopIcon from './DesktopIcon';

const DesktopIcons = () => {
  const [, , , isProfileOpened, isProjectsOpened, isBlogOpened] = useWindowContext();

  const icons: ITaskInfo[] = [
    {
      id: 1,
      name: 'profile',
      isOpened: isProfileOpened,
    },
    {
      id: 2,
      name: 'projects',
      isOpened: isProjectsOpened,
    },
    {
      id: 3,
      name: 'blog',
      isOpened: isBlogOpened,
    },
  ];

  return (
    <>
      <DesktopIcon icons={icons} />
    </>
  );
};

export default DesktopIcons;
