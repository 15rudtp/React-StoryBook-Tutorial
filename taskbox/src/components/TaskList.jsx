import React from 'react';
import PropTypes from "prop-types";
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskState } from '../lib/store';

export default function TaskList() {
  
  const tasks = useSelector((state) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t) => t.state === 'TASK_PINNED'),
      ...state.taskbox.tasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    return filteredTasks;
  });

  const { status } = useSelector((state) => state.taskbox);
  const dispatch = useDispatch();

  const pinTask = (value) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
  };

  const archiveTask = (value) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
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


  if (status === 'loading') {
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

  return (
    <div className="list-items" data-testid="success" key={"success"}>
      {tasks.map(task => (
        <Task key={task.id} 
              task={task}
              onPinTask={pinTask}
              onArchiveTask={archiveTask}
              />
      ))}
    </div>
  );
}


TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
}
TaskList.defaultProps = {
  loading: false
}