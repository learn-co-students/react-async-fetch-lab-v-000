// create your App component here

import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props)
            this.state = {
              data: null,
        };
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

    render() {
        return (
        <div>get some</div>
        )
    }
}

export default App;  