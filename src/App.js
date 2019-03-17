// create your App component here
import React from 'react';

export default class App extends React.Component {
	state = {
		spacePeople: []
	}

	render(){
		return(
			<div>
				{this.state.spacePeople.map(person => ` ${person.name} • `)}
			</div>
		)
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
			.then(response => response.json())
			.then((data) => {
				this.setState({
					spacePeople: data.people
				})
			})
		console.log(this.state.spacePeople)
	}
}
