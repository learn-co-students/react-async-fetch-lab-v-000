// create your App component here
import React, {Component} from 'react'

class App extends Component {
	constructor(){
		super()
		this.state = {people: []}
	}

	render() {

		return (
			<h1>element</h1>
			)
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(response => response.json())
		.then(data => {
			this.setState({people: data.people})
		})
	}
}


export default App