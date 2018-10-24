import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => this.setState({peopleInSpace: data.people}))
  }

  render(){
    return(
      <div className="people-in-space">
        <ul>
        {this.state.peopleInSpace.map((people, i) =>
          <li key={i}>{people.name}</li>)
        }
          </ul>
      </div>
    )
  }
}

export default App
