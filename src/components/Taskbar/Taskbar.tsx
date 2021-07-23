import React from 'react';
import { useWindowContext } from '@hooks/useWindowContext';
import { ITaskInfo } from '@typings/taskinfo';
import { Bar, LeftContents, RightContents } from './styles';
import MenuButton from './Menu/MenuButton';
import Task from './Task';
import Clock from './Clock';

const Taskbar = () => {
  const [, , , isProfileOpened, isProjectsOpened, isBlogOpened] = useWindowContext();

  // TODO: 바탕화면 보기 컴포넌트 추가
  const tasks: ITaskInfo[] = [
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
        <LeftContents>
          <MenuButton />
          <Task tasks={tasks} />
        </LeftContents>
        <RightContents>
          <Clock />
        </RightContents>
      </Bar>
    </>
  );
};

export default Taskbar;
