import React from 'react';
import axios from 'axios';
import HelloWorld from './HelloWorld';
import Counterizer from './Counterizer';
import Counter from './Counter';
import api from '../api';



const HelloWorldApp = React.createClass({
        getInitialState: function() {
        return {
            count: 0,
            name:'Pekkis',
            names: []
        };
    },

    componentDidMount: function() {
        api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Lusso</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter
                    }
                )}
            </div>
        );
    },
            incrementCounter: function () {
        this.setState({
            count: this.state.count + 1
        });
    }
});

export default HelloWorldApp;
