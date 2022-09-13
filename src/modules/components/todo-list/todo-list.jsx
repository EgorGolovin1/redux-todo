import React from "react";
import PropTypes from "prop-types";

import ToDoItem from "../todo-item/todo-item";
import "./todo-list.css";

const ToDoList = ({
  tasksList,
  removeTask,
  completeTask,
  handleDescriptionChange,
  onKeyPress,
}) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted}) => (
      <ToDoItem
        onKeyPress={onKeyPress}
        handleDescriptionChange={handleDescriptionChange}
        completeTask={completeTask}
        removeTask={removeTask}
        id={id}
        key={id}
        text={text}
        isCompleted={isCompleted}
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