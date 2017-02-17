import React, { Component } from 'react';
import _ from 'lodash';

import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';


const todos = [
    {
        task: 'make React tutorial',
        isComplete: false
    },
    {
        task: 'go to dentist',
        isComplete: true
    },
    {
        task: 'eat breakfast',
        isComplete: false
    }
]



class Main extends Component {
    constructor( props ){
        super( props );

        this.state = {
            todos
        }
    }

    render() {
        return(
                <div>
                    <h1>React Todo's list</h1>
                    <CreateToDo createTask={ this.createTask.bind( this ) }/>
                    <ToDoList
                        todos={ this.state.todos }
                        toggleTask={ this.toggleTask.bind( this )}
                        saveTask={ this.saveTask.bind( this )}
                    />
                </div>
        )
    }

    toggleTask( task ) {
        const foundToDo = _.find( this.state.todos, todo => todo.task === task);
        foundToDo.isComplete = !foundToDo.isComplete;
        this.setState({ todos: this.state.todos })
    }

    createTask( task ){
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos })
    }

    saveTask( oldTask, newTask){
        const foundTodo = _.find( this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask
        this.setState({ todo: this.state.todos})
    }
}



export default Main;