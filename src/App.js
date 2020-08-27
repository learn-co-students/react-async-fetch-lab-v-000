// create your App component here
import React, { Component } from "react";

export default class App extends Component {
    state = {
        astros: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(astros => {
            this.setAstros(astros.people)
        })
    }

    setAstros = (astros) => {
        this.setState({
            astros: astros
        })
    }

    displayAstro = (astro) => {
        return <div>{astro.name} - {astro.craft}</div>
    }

    render() {
        return (
            <div>
                <h1>Space</h1>
                {this.state.astros.map(astro => {
                    return this.displayAstro(astro)
                })}
            </div>
        )
    }
}