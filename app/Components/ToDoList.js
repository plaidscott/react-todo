import React, { Component } from 'react';
import _ from 'lodash'

import ToDoListHeader from './ToDoListHeader';
import ToDoListItem from './ToDoListItem'


class ToDoList extends Component {
    renderItems() {
        return _.map( this.props.todos, ( todo, index ) => <ToDoListItem key={ index } {...todo} {...this.props}/> );
    }

    render(){
        return(
            <table>
                <ToDoListHeader />
                <tbody>
                    { this.renderItems() }
                </tbody>
            </table>
        )
    }
}


export default ToDoList;