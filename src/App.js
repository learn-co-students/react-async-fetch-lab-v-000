// create your App component here
import React, {Component} from 'react'

import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      peopleInSpace: [],
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people,
      })
    })
  }

  render(){
    return(
      <div>
        {/* <Greeting/> */}
        {this.state.peopleInSpace.map(people =>
        <li>{people.name}</li>)}
        {/* <ExampleComponent />
        <Button /> */}
      </div>
    )
  }


}
