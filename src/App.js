// create your App component here
import React, {Component} from 'react'

class App extends Component{
  state ={
    data: []
  }
  render(){
    return(<div><p>Hey</p></div>)
  }
  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data =>{
      this.setState({
        data: "h"
      })
    })
  }
}
export default App
