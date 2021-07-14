import React from 'react';
import { ITask } from 'types/task';
import { TaskIcon, TaskIcons } from './styles';

interface IProps {
  tasks: ITask[];
}

const Task = ({ tasks }: IProps) => {
  return (
    <>
      <TaskIcons>
        {tasks.map((task: ITask) => (
          <TaskIcon key={task.id}>{task.name}</TaskIcon>
        ))}
      </TaskIcons>
    </>
  );
};

export default Task;
