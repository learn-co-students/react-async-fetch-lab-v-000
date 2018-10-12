// create your App component here

import React, {Component} from 'react'
// import Button from './components/Button'
// import ExampleComponent from './components/ExampleComponent'
// import Greeting from './components/Greeting'

export default class App extends Component{
state = {
    peopleInSpace: []
}
// printPeople = () =>{
//     {this.state.peopleInSpace.map(person => person.name)}
// }
render(){
    return(
        <div>
    {this.state.peopleInSpace.map(person => person.name)}
        </div>
    )
}
componentDidMount(){
fetch("http://api.open-notify.org/astros.json")
.then(response => response.json())
.then(data =>{
    this.setState({
        peopleInSpace: data.people
    })
})
}
}