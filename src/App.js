// create your App component here
import React, { Component } from 'react'

export default class App extends React.Component {
    
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

}