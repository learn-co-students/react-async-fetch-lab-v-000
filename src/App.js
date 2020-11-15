// create your App component here
import React from 'react'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({people: data.people})
        })
    }
    render(){
        return(
            <div>{this.state.people.map(p => p.name)}</div>
        )
    }
}