import React, {Component} from 'react';

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			astros: ''
		}
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(data => this.setState({
			astros: data
		}))
	}

	render() {

	}
}