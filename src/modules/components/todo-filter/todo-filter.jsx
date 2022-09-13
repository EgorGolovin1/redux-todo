import React from "react";
import PropTypes from 'prop-types';

import './todo-filter.css';

const FILTERS_BTN = [
    {
        text: 'Show All',
        id: 'all'
    },
    {
        text: 'Show Active',
        id: 'active'
    },
    {
        text: 'Show Completed',
        id: 'completed'
    }
];

// const DELETE_BTN = [
//     {
//         text: ' Clear Completed',
//         id: 'ClearCompleted'
//     },
//     {
//         text: 'Clear All',
//         id: 'ClearAll'
//     }
// ];

const ToDoFilter = ({amount,activeFilter, changeFilter}) => (
    <div className="todo-filter">
        <span className="amount">{`${amount} Tasks left`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({ text,id }) => (
                <button
                onClick={() => {changeFilter(id)}}
                    key = {id}
                    className = {id === activeFilter ? 'btn tabbed' : 'btn'}
                >{text}</button>
            ))}
        </div>
        {/* <div className="delete-group">
        {DELETE_BTN.map(({ text,id }) => (
                <button
                onClick={() => {changeFilter(id)}}
                    key = {id}
                    className = {'btn clear'}
                >{text}</button>
            ))}
        </div> */}
    </div>
    );
    
ToDoFilter.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFilter: PropTypes.func,
}

ToDoFilter.defaultProp = {
    changeFilter: () => {},
    activeFilter: '',
    amount: 0,
}


export default ToDoFilter;