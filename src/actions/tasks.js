import { CHANGE_TASK_NAME } from '../constants/tasks';

export const changeTaskName = (dispatch, id, name) => {

    dispatch({ type: CHANGE_TASK_NAME, id, name });

    fetch(`https://google.com/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name
        })
    }).then((responce) => {
        //If responce type answer json convert to object
        return responce.json()
    }).then((answer) => {
        // if status 200 update name and show alert 'Name updated'
        if (answer.statusCode === 200) {
            alert('Name updated')
        }
    }).catch(() => {
        // Execute errors handler 
    })
}