import React, {PureComponent} from 'react'

class App extends PureComponent{
  state = {
    people: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {this.setState({
      people: data.people
      })
    })
  }

  render(){
    return(
    <div>
      {this.state.people.map(p => p.name)}
    </div>
  )
  }
}
export default App;
