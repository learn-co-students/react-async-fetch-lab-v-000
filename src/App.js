import React, { Component } from 'react';

class App extends Component {
    
    constructor(){
        super();
        this.state = {
            peopleInspace: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInspace: data.people
            })
        })
    }


    render () {
        return (
            <div></div>
        )
    }
}

export default App; 