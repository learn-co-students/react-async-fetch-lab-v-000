// create your App component here
import React from 'react'

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      data: ""
    }
  }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(json => this.setState({data: json}))
  }

  render(){
    return this.state.data
  }

}
