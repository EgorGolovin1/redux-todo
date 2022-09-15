import React from "react";
import PropTypes from "prop-types";

import ToDoItem from "../todo-item/todo-item";
import "./todo-list.css";

const ToDoList = ({
  tasksList,
  removeTask,
  completeTask,
  handleDescriptionChange,
  addEdeting,
  onKeyPress,
  onChange,
}) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted, isEditing}) => (
      <ToDoItem
        handleDescriptionChange={handleDescriptionChange}
        completeTask={completeTask}
        removeTask={removeTask}
        id={id}
        key={id}
        text={text}
        addEdeting = {addEdeting}
        isEditing = {isEditing}
        isCompleted={isCompleted}
        onKeyPress = {onKeyPress}
        onChange = {onChange}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  handleDescriptionChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
  handleDescriptionChange: () => {},
  onKeyPress: () => {},
};

export default ToDoList;