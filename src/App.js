import React from 'react';

class App extends React.Component {

  state = {resaults: ''}

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json)
    .then(json => this.setState({resaults: json}))
  }

  render(){
    return (
      <div>Hello</div>
    )
  }
}

export default App
