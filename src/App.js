// create your App component here
import React from 'react';

class App extends React.Component {
  state = {
    spaceFolks: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          spaceFolks: data.people
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.spaceFolks.map(person => person.name)}
      </div>
    )
  }
}

export default App;