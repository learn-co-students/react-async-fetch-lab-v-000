// create your App component here
import React from 'react';


class App extends React.Component {

  state = {
    data:[]
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => this.setState({
      data: data
    }))
  }

  render() {
    console.log(this.state.data.message)
    return(
      <div></div>

    )
  }
}


export default App
