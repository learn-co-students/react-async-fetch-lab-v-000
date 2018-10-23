// create your App component here
import React, {Component} from 'react'

export default class App extends Component {
  state= {
    peopleInSpace:[]
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      console.log(data.people[0].name)
      this.setState({
        peopleInSpace: data.people
      })
    })
  }

  render() {
    return (
      <div>
      {this.state.peopleInSpace.map(person => person.name ).join(', ')}
      </div>
    )
  }
}
