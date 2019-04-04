// create your App component here
import React, { Component } from 'react';


class App extends Component {


	state={
		people:[]
	}

	componentDidMount() {
	    fetch('http://api.open-notify.org/astros.json')
	      .then(response => response.json())
	      .then(data => {
	        this.setState({
	          people: data.people
	        })
	      })
	  }
	render() {

	    return (
	      <div className="App">
	        <h1>SpacePeople</h1>
	        <div className="People">
	          {this.state.people.map(person => <p>{person.name}</p>)}
	        </div>

	      </div>
	    );
	  }


}
export default App;
