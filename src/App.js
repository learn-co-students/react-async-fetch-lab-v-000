// create your App component here

import React from 'react';

// Achtung! this is an antipattern, but the API does not have an id, so this has to be done
function ListItem(props) {
  return(
    <li key={props.id}>{props.name}</li>
  )
}

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    return(
      <ul>
        {this.state.peopleInSpace.map((person,id) => <ListItem name={person.name} key={id} />)}
      </ul>
    )
  }
}
