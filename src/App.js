import React from 'react'

class App extends React.Component {

  state = {
    astros: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(r=>r.json())
      .then(json=> this.setState({
        astros: json.people
      }))
  }

  render() {
    return (
      <div>
        {this.state.astros.map(a=> <p>{a.name}</p>)}
      </div>
      
    )
  }
}

export default App