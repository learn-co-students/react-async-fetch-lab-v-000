
// why import this way? sometimes component, and also sometimes it's extends react.component, etc
import React from 'react'

class App extends Component {

  this.state = {
    // would this work with an empty string instead? since map is being used later
    peopleInSpace: []
  }

  render() {
    return(
      this.state.peopleInSpace.map(person => person.name )
    )
  }


  componentDidMount(){
    fetch('https://api')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace = data.person
        })
      })
  }


}
