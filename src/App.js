import React from 'react'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json)
    .then(date =>{
        this.setState({
          peopleInSpace: data.people
        })
      })
  }




  render() {
    return (
      <div />
    )
  }

}
export default App
