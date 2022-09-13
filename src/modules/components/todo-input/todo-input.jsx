import React from "react";
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({value, onChange, onSubmit}) => (
    <form onSubmit = {onSubmit} className="todo-input-wrapper">
        <button type="submit" className="add-btn">
            Add Task
        </button>
        <input
            value={value}
            className="add-input"
            placeholder="What needs to be done?"
            onChange={onChange}
        />
    </form>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
};

ToDoInput.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
};

export default ToDoInput;