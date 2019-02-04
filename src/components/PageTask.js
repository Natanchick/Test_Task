import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditableLabel from 'react-inline-editing';
import { changeTaskName } from '../actions/tasks';
import { RETURN_LIST } from '../constants/tasks';
import '../styles/page.scss';

const PageTask = (props) => {

    const id = props.match.params.id;
    const task = props.tasks.getById[id];

    const {
        name,
        description,
    } = task;

    return (
        <div className='page'>
            <Link to='/'>{RETURN_LIST}</Link>
            <EditableLabel
                text={name}
                labelClassName='task-name'
                onFocusOut={(name) => {
                    props.changeName(id, name)
                }}
            />
            <span>{description}</span>
        </div>
    )
}

const mapStateToProps = ({ tasks }) => {
    return {
        tasks
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        changeName: (id, name) => {
            changeTaskName(dispatch, id, name);
        }
    }
};

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(PageTask);