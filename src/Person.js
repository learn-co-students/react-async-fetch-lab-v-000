import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props)

        this.state = { name:props.name }
    }

    render() {
        return (
            <li>{this.state.name}</li>
        )
    }
}