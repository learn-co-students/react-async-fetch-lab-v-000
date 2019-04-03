import React, {Component} from 'react';

class App extends Component {
  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(({people}) => this.setState({astronauts: people})
    )
  }

  render() {
    return (
      <div>
        {this.state.astronauts.map((astronaut, index) => <h3 key={index}>{astronaut.name}, {astronaut.craft}</h3>)}
      </div>
    )
  }

}

export default App
