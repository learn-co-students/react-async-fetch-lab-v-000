// create your App component here
import React, {Component} from 'react';

export default class App extends Component {

    state = {
        spacePeople: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({spacePeople: people}))
    }

    render() {
        return (
            <div>
                {this.state.spacePeople.map((person, id) => <h3 key={id}>{person.name + ' - Craft: ' + person.craft}</h3>)}
            </div>
        )
    }
}

