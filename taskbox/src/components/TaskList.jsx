import React from 'react';

import Task from './Task';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className='loading-item'>
        <span className='glow-checkbox'></span>
        <span className='glow-text'>
            <span>SPAN태그로</span>
            <span>길이를 조정합니다</span>
            <span>조정합니다.</span>
        </span>
    </div>
  )


  if (loading) {
    return <div className="list-items" data-testid='loading' key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
    </div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items" data-testid='empty'>
        <div className='wrapper-message'>
            <span className='icon-check'></span>
            <div className='title-message'>You have no tasks</div>
            <div className='subtitle-message'>Sit back and relax</div>
        </div>
    </div>;
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ]

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}