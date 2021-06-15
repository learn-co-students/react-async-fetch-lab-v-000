// create your App component here
import React, {Component} from 'react'

class App extends Component {

    state = {

    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(r => r.json())
            .then(r => this.setState({r}))
        }

    render(){
        return (<div></div>)
    }
}


export default App