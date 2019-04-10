// create your App component here
import React from 'react'

class App extends React.Component {

  state = {
    peopleInSpace: []
  }
  
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    );
  }

  componentDidMount() {
    let url = 'http://api.open-notify.org/astros.json';

    fetch(url)
      .then(response => response.json())
      .then( ({people}) => {
        this.setState({
          peopleInSpace: people
        }, console.log("Fetched: ", people))
        
      })
  }


}

export default App