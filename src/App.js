import React, { PureComponent } from 'react';

class App extends PureComponent {

	constructor() { 
		super()
	}

	render() { 
	}

	componentDidMount() { 
		fetch('http://api.open-notify.org/astros.json')
	}
}

export default App 