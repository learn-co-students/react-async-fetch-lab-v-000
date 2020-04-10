// create your App component here
import React from 'react';

class App extends React.Component {
    state = {
        astronauts: []
    }
    componentDidMount() {
        fetch(`http://api.open-notify.org/astros.json`)
            .then(response => response.json())
            .then((data) => {
                debugger
                this.setState({
                    astronauts: data
                })
            })
        }

    render() {
        return (
            <div className='app'>
                {this.state.astronauts}
            </div>
        );
    }
}

export default App;