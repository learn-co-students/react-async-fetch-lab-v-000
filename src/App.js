// create your App component here
import React, {Component} from 'react';

class App extends Component{

  state = {
    peopleInSpace: []
  };


  render(){
    return (
    <div>
        {this.state.peopleInSpace.map((person, id) => <h3 key={id}>{person.name}</h3>)}
      </div>
  )}

componentDidMount(){
  fetch('http://api.open-notify.org/astros.json')
  .then(res => res.json())
  .then(data => {
    this.setState({
      peopleInSpace:data.people
    })
  })
}
}


export default App;
