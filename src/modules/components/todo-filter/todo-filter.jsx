import React from "react";
import PropTypes from "prop-types";

import "./todo-filter.css";

const FILTERS_BTN = [
  {
    text: "Show All",
    id: "all",
  },
  {
    text: "Show Active",
    id: "active",
  },
  {
    text: "Show Completed",
    id: "completed",
  },
];

const ToDoFilter = ({ amount, activeFilter, changeFilter, clearAll }) => (
  <div className="todo-filter">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => {
            changeFilter(id);
          }}
          key={id}
          className={id === activeFilter ? "btn tabbed" : "btn"}
        >
          {text}
        </button>
      ))}
    </div>
    <button onClick={clearAll} className="btn delete">
      Clear All
    </button>
  </div>
);

ToDoFilter.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
};

ToDoFilter.defaultProp = {
  changeFilter: () => {},
  activeFilter: "",
  amount: 0,
};

export default ToDoFilter;