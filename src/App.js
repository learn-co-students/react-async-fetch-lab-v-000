import React from 'react'

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
  }


  render() {
    return (
      <div>
        <h1>
          App
        </h1>
      </div>
    )
  }
}
