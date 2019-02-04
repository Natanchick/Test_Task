import { CHANGE_TASK_NAME } from '../constants/tasks';
import data from '../data.json';

const initialAccumulator = {
    getById: {},
    ids: []
}

const reduserHandler = (accumulator, task) => {
    if (task.obj_status === 'active') {
        accumulator.getById[task.id] = task;
        accumulator.ids.push(task.id);
    }
    return accumulator;
}


const initialState = data.reduce(reduserHandler, initialAccumulator);

const changeTaskName = (getById, id, name) => {
    getById[id] = { ...getById[id], name };
    return getById;
};

const tasks = (state = initialState, action) => {

    const {
        type,
        id,
        name
    } = action

    switch (type) {
        case CHANGE_TASK_NAME:
            return {
                ...state,
                getById: changeTaskName(state.getById, id, name)
            }

        default: return state;
    }

}

export default tasks;