import React, {Component} from 'react';
import Home from './view/Home.jsx';
import Login from './view/Login.jsx';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Default Name'
        };
    }

    render() {
        return (
            <div>
                <Home/>
                <Login/>
            </div>
        )
    }
}