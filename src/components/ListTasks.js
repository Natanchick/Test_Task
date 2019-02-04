import React from 'react';
import Task from './Task';
import '../styles/tasks.scss';

const ListTasks = ({ tasks }) => {
    return tasks.ids.map((id) =>
        <Task 
            key={id} 
            data={tasks.getById[id]} 
        />
    )
}

export default ListTasks;