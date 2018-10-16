// create your App component here
import React from 'react'

class App extends React.Component{
	constructor(props){
		super()
		this.state = {
			people: []
		}
	}

	componentDidMount(){
		fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => this.setState({people: data.people}));
	}

	render(){
		return (<p>Hi</p>);
	}


}

export default App