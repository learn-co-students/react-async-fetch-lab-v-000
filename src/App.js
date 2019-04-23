import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			peopleInSpace: []
		};
	}
	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json').then((res) => res.json()).then((data) => {
			this.setState({
				peopleInSpace: data.people
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.peopleInSpace.map((person, id) => {
					<p key={id}>{person.name}</p>;
				})}
			</div>
		);
	}
}
export default App;
