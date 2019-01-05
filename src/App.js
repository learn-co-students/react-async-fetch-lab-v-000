// create your App component here
import React from 'react'
//import Button from './components/Button'
//import ExampleComponent from './components/ExampleComponent'
//import Greeting from './components/Greeting'

class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  render(){
    return(
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(({people}) => this.setState({peopleInSpace: people}))
  }
}

export default App
