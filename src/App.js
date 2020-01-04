// create your App component here
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  render () {
    return (
      <div> {this.state.data} </div>
    )
  }

  componentDidMount () {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => this.setState({ data: data.people }));
  }
}

export default App;
