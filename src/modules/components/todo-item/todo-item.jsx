import React from "react";
import PropTypes from "prop-types";

import "./todo-item.css";
const ToDoItem = ({
  id,
  text,
  isCompleted,
  removeTask,
  completeTask,
  isEditing,
  addEdeting,
  onKeyPress,
  onChange
}) => (
  <li
    onDoubleClick={() => addEdeting(id)}
    className={isCompleted ? "todo-item checked" : "todo-item"}
  >
    {isEditing? <input type = "textarea" className="todo-item-description input" onKeyPress = {(e) => onKeyPress(id,e.key,e.target)} onChange={onChange}  defaultValue = {text}></input> :
     <div
      className="todo-item-description"
    >
      {text}
    </div>}
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={() => completeTask(id)}
      className={
        isCompleted ? "tasks-btn-complete" : "tasks-btn-complete checked"
      }
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
  isEditing: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
  onKeyPress: PropTypes.func,
  handleDescriptionChange: PropTypes.func,
  addEdeting: PropTypes.func,
};

ToDoItem.defaultProp = {
  text: "",
  isCompleted: false,
  isEditing: false,
  removeTask: () => {},
  id: 0,
  onKeyPress: () => {},
  handleDescriptionChange: () => {},
  addEdeting: () => {},
};
export default ToDoItem;