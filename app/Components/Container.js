import React, { Component } from 'react';

class Container extends Component {
    render() {
        return(
            <div className="col-centered">
                <div className="container-fluid">
                    <h1 className="page-header text-center"> To Do App</h1>
                </div>
                { this.props.children }
            </div>
        )
    }
}

export default Container;