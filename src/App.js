// create your App component here
import React, {Component} from 'react'

class App extends Component {

    state = {
        names: []
    }


    render() {
        return(
            <div>
                {this.state.names.map((person, id) => <h1 key={id}> {person.name} </h1>)}
            </div>
        ) 
    }


    componentDidMount() {
        const endpoint = "http://api.open-notify.org/astros.json"
        fetch(endpoint)
        .then(response => response.json())
        .then(({data}) => this.setState({ names: data }))
        }
    }



export default App;

