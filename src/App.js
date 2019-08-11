import React, { Component } from 'react'; 

 class App extends Component {

     state = {
        peopleInSpace : []
    }

     componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace : data.people
            })
        })
    }

     render() {
        return (
            <div>
                <ol>
                {this.state.peopleInSpace.map((person, id) => (
                    <li key={id}>
                        Name: {person.name}<br/>
                        Craft: {person.craft}
                    </li>
                ))}
                </ol>
            </div>           
        )
    }
}

 export default App;