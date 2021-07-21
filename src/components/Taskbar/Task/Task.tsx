import { useWindowContext } from '@hooks/useWindowContext';
import React from 'react';
import { ITask } from 'types/task';
import { TaskIcon, TaskIcons, ActiveTask } from './styles';

interface IProps {
  tasks: ITask[];
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
        {tasks.map((task: ITask) => (
          <TaskIcon key={task.id} onClick={() => onClickTask(task.name)}>
            {task.name} {task.isOpened ? <ActiveTask /> : ''}
          </TaskIcon>
        ))}
      </TaskIcons>
    </>
  );
};

export default Task;
