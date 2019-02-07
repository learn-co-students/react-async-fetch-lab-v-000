import React, {Component} from 'react'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            astronauts: []
        }
    }
   
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(astronauts => this.setState({astronauts}))
        .catch(err=> console.log("Error"))
    }

    render() {
        const astronauts = this.state.astronauts.map((astro, index) => (
            <p>astronaut={astro} key={index}</p>
        ))
        return (
            <div>
                {astronauts}
            </div>
        )
    }
}

export default App;