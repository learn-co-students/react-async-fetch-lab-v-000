import React, { Component } from 'react';
class App extends Component {

  state = {
   peopleInSpace: []
  }

  componentDidMount() {
   fetch('http://api.open-notify.org/astros.json')
     .then(response => response.json())
     .then(data => {
       this.setState({
         peopleInSpace: data.people
       })
     })
   }//end componentDidMount



  render() {
    return(
      <div> <ul>{this.state.peopleInSpace.map(person => <li>{person.name}</li>)} </ul> </div>
    )
  }

}

export default App;
