import React, { Component } from 'react';



class Main extends Component {
    constructor( props ){
        super( props );
        this.state= {
            tasks: []
        };

    }

    addItem( e ) {
        e.preventDefault();
        console.log('e', e )
    }

    render() {
        return(
            <div className="container col-centered">
                <div className="row">Howdy Hi</div>
                <div className="col-sm-5 col-md-5 col-lg-5 center-block text-center back-one">
                    <h3 className="col-lg-12 text-center">Input Here</h3>
                </div>
                <form onSubmit={ this.addItem }>
                    <div className="form-group col-lg-3">
                        <h2>Name:</h2>
                        <input
                            type="text"
                            className="form-control"
                            name="task"
                            placeholder="enter task"

                        />
                    </div>
                    <button className="btn btn-primary" type="submit">Submit Name</button>
                </form>
            </div>
        )
    }
}

export default Main;