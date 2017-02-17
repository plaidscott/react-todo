import React, { Component } from 'react';

class ToDoListItem extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isEditing: false
        }
    }

    onEditClick() {
        this.setState({ isEditing: true })
    }
    onCancelClick() {
        this.setState({ isEditing: false })
    }
    onSaveClick(e) {
        e.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value(this.props.saveTask())
    }
    renderActionSection() {
        console.log( this.props );
        if( this.state.isEditing ){
            return(
                <td>
                    <button onClick={ this.onSaveClick.bind( this )}>Save</button>
                    <button onClick={ this.onCancelClick.bind( this )}>Cancel</button>
                </td>
            );
        } else {
            return (
            <td>
                <button onClick={ this.onEditClick.bind( this )}>edit</button>
                <button>delete</button>
            </td>
            )
        }
    }

    renderTaskSection() {
        const { task, isComplete} = this.props;
        const taskStyle = {
            color: isComplete ? 'green' : 'red',
            cursor: 'pointer'
        };
        if( this.state.isEditing ) {
            return (
                <td>
                    <form onSumbit={ this.onSaveClick.bind( this ) }>
                        <input
                            type="text"
                            defaultValue={ task }
                            ref="editInput"
                        />
                    </form>
                </td>
            )
        }

        return(
            <td
                style={ taskStyle }
                onClick={ this.props.toggleTask.bind( this, task ) }

            >
                { task }
            </td>
        )
    }




    render() {
        return(

                <tr>
                    { this.renderTaskSection() }
                    { this.renderActionSection() }
                </tr>

        )
    }
}

export default ToDoListItem;