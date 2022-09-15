import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  CHANGE_DESCRIPTION,
  CLEAR_ALL,
  CONFIG_CHANGES,
} from "../../constans";
import { load } from "redux-localstorage-simple";

let TASKS = load({ namespace: "todo_list" });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  };
}

const tasks = (
  state = TASKS.tasks,
  { id, text, isCompleted,isEditing, type }
) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
          isEditing
        },
      ];
    case REMOVE_TASK:
      return [...state].filter((task) => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    case CHANGE_DESCRIPTION:
      return [...state].map((task) => {
        if (task.id === id) {
          task.isEditing = !task.isEditing;
        }
        return task;
      });
    case CONFIG_CHANGES:
      return [...state].map((task) => {
        if (task.id === id) {
          task.text = text;
          task.isEditing = false;
        }
        return task;
      });
    case CLEAR_ALL:
      return (state = []);
    default:
      return state;
  }
};
export default tasks;
