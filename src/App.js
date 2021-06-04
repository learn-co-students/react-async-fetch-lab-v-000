// create your App component here
import React, { Component } from 'react'
class App extends Component {

    state = {
        peopleInSpace: []
    }

    // render(){
    //     return(

    //         <div>
    //             {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
    //         </div>
    //     )
    // }

    // componentDidMount() {
    //     fetch('http://api.open-notify.org/astros.json')
    //       .then(response => response.json())
    //       .then(({people}) => this.setState({ peopleInSpace: people }))
    
    //   }

//OR

setAPIValues = (people) => {
    this.setState({
        peopleInSpace: people
    })
}

componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(values => {
        this.setAPIValues(values.people)
    })
}

displayPeople= (p) => {
    return <div>{p.name} - {p.craft}</div>
}

render() {
    return (
        <div>
            <h1>Space</h1>
            {this.state. peopleInSpace.map(p => {
                return this.displayPeople(p)
            })}
        </div>
    )
}



}
export default App
