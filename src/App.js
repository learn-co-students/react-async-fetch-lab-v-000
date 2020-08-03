import React from 'react';



class App extends React.Component {

    state = {
        spacePeople: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(({people}) => {this.setState({spacePeople: people})
        })
    }

    render () {
        return(
            <div> {this.state.spacePeople.map((person, id) => <h2 key={id}>{person.name}</h2>)}</div>
        )
    }

}

export default App