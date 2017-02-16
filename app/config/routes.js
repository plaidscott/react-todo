import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Container from '../Components/Container';
import Main from '../Components/Main';

var routes = (
    <Router history={ hashHistory }>
        <Route path="/" component={ Container }>
            <IndexRoute component={ Main }/>
        </Route>
    </Router>
);

export default routes;