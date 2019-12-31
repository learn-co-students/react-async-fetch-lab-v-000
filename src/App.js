// create your App component here
import React from 'react';

export default class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    render(){
        return(
            <div>
                Astronauts in space
            </div>
        )
    }
}