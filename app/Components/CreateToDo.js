import React, { Component } from 'react';



class CreateToDo extends Component {
    handleCreate( event ) {
        event.preventDefault();
        console.log( 'input value',this.refs.createInput.value );
        this.props.createTask( this.refs.createInput.value );
        this.refs.createInput.value = '';
    }

    render(){
        return(
            <form onSubmit={ this.handleCreate.bind( this )}>
                <input
                    type="text"
                    placeholder="What do I need to do?"
                    ref="createInput"
                />
                <button type="submit">create</button>
            </form>
        )
    }
}


export default CreateToDo;