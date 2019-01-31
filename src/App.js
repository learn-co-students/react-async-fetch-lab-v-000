import React, {Component} from 'react';

export default class App extends Component {
	state = {
			astros: []
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(data => data.json())
		// .then(astros => console.log(astros))
		.then(data => this.setState({ astros: data.people }))

	}

	render() {
		return (
			<div>
				{this.state.astros.map((astro, index) =>
					<li key={index}>{astro.name}</li>
				)}
			</div>
		)
	}
}