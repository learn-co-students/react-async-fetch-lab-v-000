// create your App component here
import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <h2>omg look at all the ppl in space</h2>
                    {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default App;