// create your App component here
import React, { Component} from 'react'

export default class App extends Component {
    
    constructor(){
        super()
        this.state={
            people: []
        }
    }
    
    
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    astros: data.people
                })
            })
    }
    
    render(){
        <p>{this.state.people}</p>
    }
    
}