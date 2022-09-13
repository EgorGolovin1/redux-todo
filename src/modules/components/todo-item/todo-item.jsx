import React from "react";
import PropTypes from 'prop-types';

import './todo-item.css';
const ToDoItem = ( {text, isCompleted, removeTask, completeTask, id, handleDescriptionChange, onKeyPress} ) => (
    <li className={isCompleted ? 'todo-item checked' : 'todo-item' }>
        <div onKeyUp = {(e) => handleDescriptionChange(e)} onKeyPress = {(e) => onKeyPress(id,e.key,e.target)}  contentEditable = 'true' className="todo-item-description" suppressContentEditableWarning="true">{text}</div>
        <input
            type="checkbox"
            checked = {isCompleted}
            onChange = {() => completeTask(id)}
            className= {isCompleted ? 'tasks-btn-complete' : 'tasks-btn-complete checked' }
        />
        <div
            className="tasks-btn-delete "
            onClick={() => removeTask(id)}
        ></div>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    id: PropTypes.number,
    onKeyPress: PropTypes.func,
    handleDescriptionChange: PropTypes.func,
}

ToDoItem.defaultProp = {
    text: '',
    isCompleted: false,
    removeTask: () => {},
    id: 0,
    onKeyPress: () => {},
    handleDescriptionChange: () => {},
    value: '',
}
export default ToDoItem;