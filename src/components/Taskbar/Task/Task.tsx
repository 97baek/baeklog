import { useWindowContext } from '@hooks/useWindowContext';
import React from 'react';
import { ITaskInfo } from '@typings/taskinfo';
import { TaskIcon, TaskIcons, ActiveTask } from './styles';

interface IProps {
  tasks: ITaskInfo[];
}

const Task = ({ tasks }: IProps) => {
  const [, , , , , , openWindow, , showWindow] = useWindowContext();

  const onClickTask = (task: string) => {
    openWindow(task);
    showWindow(task);
  };

  return (
    <>
      <TaskIcons>
        {tasks.map((task: ITaskInfo) => (
          <TaskIcon key={task.id} onClick={() => onClickTask(task.name)}>
            {task.name} {task.isOpened ? <ActiveTask /> : ''}
          </TaskIcon>
        ))}
      </TaskIcons>
    </>
  );
};

export default Task;
