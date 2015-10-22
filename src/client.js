import'./client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link, IndexRoute } from 'react-router';

import Index from './components/Index';
//import HelloWorld from './components/HelloWorld';
//import Counterizer from './components/Counterizer';
import Counter from './components/Counter';
import HelloWorldApp from './components/HelloWorldApp';
import Greeter from './components/Greeter';


//const tussit = getTussit();

//tussit.then((data) => console.log(data));



const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
    );

//console.log('kvaak sanoo ankka!');
