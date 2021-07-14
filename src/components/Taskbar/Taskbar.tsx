import React from 'react';
import { ITask } from 'types/task';
import MenuButton from './Menu/MenuButton';
import { Bar } from './styles';
import Task from './Task';

const Taskbar = () => {
  const tasks: ITask[] = [
    {
      id: 1,
      name: 'profile',
    },
    {
      id: 2,
      name: 'projects',
    },
    {
      id: 3,
      name: 'blog',
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
