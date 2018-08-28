// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {body: "Temp"}
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json").then((resp) => resp.json()).then(body => this.setState({body: body.people[0].name}))
  }

  render() {
    return (
      <div>
        {this.state.body}
      </div>
    );
  }
  
}