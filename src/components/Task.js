import React from 'react';
import { Link } from 'react-router-dom';
import Tags from './Tags';
import { TIME_TASK } from '../constants/tasks';
import { EFFORT } from '../constants/tasks';
import { FINISH_DATE } from '../constants/tasks';

const Task = (props) => {
    const {
        id,
        name,
        actual_effort,
        estimated_effort,
        due_date,
        tags,
        is_high_priority,
    } = props.data;

    const classTask = is_high_priority ? 'task major' : 'task';

    const dateTask = new Date(due_date).toLocaleDateString('ru-RU');

    return (
        <div className={classTask}>
            <Link
                className='name'
                to={`/page/${id}`}
            >
                {name}
            </Link>
            <span className='task-time'>{TIME_TASK} {actual_effort}</span>
            <span className='task-effort'>{EFFORT} {estimated_effort}</span>
            <span className='task-date'>{FINISH_DATE} {dateTask}</span>
            <Tags data={tags} />
        </div>
    )
}

export default Task;