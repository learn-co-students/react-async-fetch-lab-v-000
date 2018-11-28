import React, { Component } from 'react';
import Button from './components/Button';
import ExampleComponent from './components/ExampleComponent';
import Greeting from './components/Greeting';


export default class App extends Component {


    render() {
        return (
            <div className="App">
                <Greeting />
                <Button />
            </div>
        )
    }



    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then(data => console.log(data.json()));
    }

}
