import React, {Component} from 'react';

class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    const peopleMap = this.state.peopleInSpace.map(person => {
      return <p key={person.name}>{person.name}</p>
    })

    return (
      <div>
        {peopleMap}
      </div>
    );
  }
}

export default App
