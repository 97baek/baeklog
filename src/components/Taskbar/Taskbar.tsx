import { useWindowContext } from '@hooks/useWindowContext';
import React from 'react';
import { ITask } from 'types/task';
import MenuButton from './Menu/MenuButton';
import { Bar } from './styles';
import Task from './Task';

const Taskbar = () => {
  const [, , , isProfileOpened, isProjectsOpened, isBlogOpened] = useWindowContext();
  const tasks: ITask[] = [
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
      <Bar>
        <MenuButton />
        <Task tasks={tasks} />
      </Bar>
    </>
  );
};

export default Taskbar;
