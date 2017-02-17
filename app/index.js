import React, { Component } from 'react';
import ReactDom from 'react-dom';

import routes from './config/routes'
import Container from './Components/Container'
import Main from './Components/Main'

ReactDom.render(
    <Main /> , document.getElementById('app')
);