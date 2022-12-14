import {ADD_TASK,REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER, CHANGE_DESCRIPTION, CLEAR_ALL, CONFIG_CHANGES} from '../../constans';

export const addTask = (id, text, isCompleted, isEditing) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted,
    isEditing
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    id,
})

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id
})

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    activeFilter
})

export const addEdeting = (id)=> ({
    type: CHANGE_DESCRIPTION,
    id,
})

export const configEdeting = (id,text) => ({
    type: CONFIG_CHANGES,
    id,
    text
})

export const clearAll = () => ({
    type: CLEAR_ALL
})