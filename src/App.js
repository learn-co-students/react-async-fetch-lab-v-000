import React, { Component } from 'react';

// import  from './'

//no need to modify anything in this component
export default class App extends Component {

  constructor() {
    super()

    this.state = {}
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
    return (
      <div className="">

      </div>
    );
  }
}
