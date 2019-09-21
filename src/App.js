// create your App component here
import React, {Component} from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      astronauts: [] //starts as empty array
    }
  }

  listAstronauts = () => {
    return this.state.astronauts.map((astro, id) => {
      return <li key={id}>{astro.name}</li>
    })
  }

  render(){
    return (
      <div>
       {this.listAstronauts()}
     </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          astronauts: data.people //was getting error b/c just doing data
        })
      })
    }
}
