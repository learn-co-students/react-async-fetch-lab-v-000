import React from 'react'

class App extends React.Component {

    async componentDidMount() {
        await fetch('http://api.open-notify.org/astros.json')
    }

    render() {
        <p>hello world</p>
    }
}

export default App
