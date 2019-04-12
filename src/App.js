// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
	state = {
		people: []
	}

	componentDidMount() {
		const url = 'http://api.open-notify.org/astros.json'
		fetch(url)
			.then( resp => resp.json())
			.then( data => {
				this.setState({
					people: data.people
				}, () => console.log(this.state.people));
			})		
	}

	render() {
		return <div className='App'>This is the app</div>
	}

}