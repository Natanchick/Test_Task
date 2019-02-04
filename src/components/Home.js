import React from 'react';
import { connect } from 'react-redux';
import ListTasks from './ListTasks';
import { LIST_TASKS_TEXT } from '../constants/tasks';


const Home = ({ tasks }) => {
    return (
        <div className='page'>
            <h1>{LIST_TASKS_TEXT}</h1>
            <div id='list-tasks'>
                <ListTasks tasks={tasks} />
            </div>
        </div>
    )
}

const mapStateToProps = ({ tasks }) => {
    return {
        tasks
    }
};

export default connect(
    mapStateToProps,
    null
)(Home);