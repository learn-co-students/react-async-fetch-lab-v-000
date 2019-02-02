// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = {
        people: ''
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        people: data.people
                    })
                })

    }

    render() {
        return (
            <div className="fetchResults">
                test
            </div>
        )
    }
}

export default App;
