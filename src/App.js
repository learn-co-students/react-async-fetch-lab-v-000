// create your App component here
import React from 'react';

export default class App extends React.Component {

  state = {
    astrosInSpace: []
  }

  render() {
    return(
      <div>
        {this.state.astrosInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
    }

    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(({people}) => this.setState({ astrosInSpace: people }))
  }
}
