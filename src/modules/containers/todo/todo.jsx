import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, changeFilter, change} from '../../actions/actionCreator';

import TodoInput from '../../components/todo-input/todo-input';
import TodoList from '../../components/todo-list/todo-list';
import TodoFilter from '../../components/todo-filter/todo-filter';
import Notes from '../../components/todo-notes/todo-notes'

import './todo.css';



class ToDo extends Component {
    state = {
        description: '',
        actualtext: '',
    }

    handleInputChange = ({ target: {value}}) => {
        this.setState({
            description: value,
        })
    }
    
    handleDescriptionChange = (e) => {
        this.setState({
            actualtext: e.target.innerHTML,
        })
    }

    change = (id,key,item) => {
        let {actualtext} = this.state;
        if(actualtext.length > 3 && key === 'Enter'){
            let {change} = this.props;
            change(id,actualtext)
            item.blur();
        }
    }

    addTask = (e) => {
        e.preventDefault();
        
        const {description} = this.state;
        
        if (description.length > 3) {
            const {addTask} = this.props;
            addTask((new Date()).getTime(), description, false, false);

            this.setState({
                description: '',
            })
        }
    }

    filterTasks = (tasks, activeFilter) => {
        switch(activeFilter){
            case "completed":
            return tasks.filter(task => task.isCompleted);
            case "active":
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }

    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    render(){
        const {description, actualtext} = this.state;
        const {tasks, removeTask, completeTask, filters, changeFilter} = this.props;
        const isTasksExsist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks,filters);
        const taskCounter = this.getActiveTasksCounter(tasks);
        return (
            <div className="todo-wrapper">
                <TodoInput onSubmit = {this.addTask} onChange={this.handleInputChange} value = {description}/>
                {isTasksExsist && <TodoList  actualtext = {actualtext} onKeyPress = {this.change} handleDescriptionChange = {this.handleDescriptionChange} completeTask = {completeTask} tasksList = {filteredTasks} removeTask = {removeTask}/>}
                {isTasksExsist && <TodoFilter changeFilter= {changeFilter} amount = {taskCounter} activeFilter = {filters}/>}
                <Notes/>
            </div>
        )
    }
}
export default connect(({tasks, filters}) => ({
    tasks,
    filters,
}),{addTask, removeTask, completeTask, changeFilter, change})(ToDo);
