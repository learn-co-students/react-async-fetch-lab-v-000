import React from 'react';

class App extends React.Component {
  state = { 
    data: []
   }

  componentDidMount() {
    const url = 'http://api.open-notify.org/astros.json'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({data}))

  }

  render() {

    return (
      <div>
        {this.state.data.map((person, index) => <h1 key={index}>{person.name}</h1>)}
      </div>
    );
  }
}

export default App;

