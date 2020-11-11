// create your App component here
import React, { Component } from 'react'

 class App extends Component {

    state ={
        peopleInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then((resp) => resp.json())
        .then(data => this.setState({
            peopleInSpace: data
        }))
    }


    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((data, id) => <h1 key={id}>{data.name}</h1>)}
            </div>
        )
    }
}
export default App
