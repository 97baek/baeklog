import { useWindowContext } from '@hooks/useWindowContext';
import React from 'react';
import { ITask } from 'types/task';
import { TaskIcon, TaskIcons } from './styles';

interface IProps {
  tasks: ITask[];
}

const Task = ({ tasks }: IProps) => {
  const [, , , openWindow] = useWindowContext();
  // console.log(tasks);
  return (
    <>
      <TaskIcons>
        {tasks.map((task: ITask) => (
          <TaskIcon key={task.id} onClick={() => openWindow(task.name)}>
            {task.name}
          </TaskIcon>
        ))}
      </TaskIcons>
    </>
  );
};

export default Task;
