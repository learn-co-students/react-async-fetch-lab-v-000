import React from 'react';

class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
      .then(data => {
        this.setState({
          people: data.people
      })
    })
  }

  render() {
    return(
      <div>
        {this.state.people.map(person => <h4>{person.name}</h4>)}
      </div>
    );
  }
}

export default App;
