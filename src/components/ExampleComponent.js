import React, { Component } from 'react';

class ExampleComponent extends Component {

  returnData = () => {
    if (this.props.date !== []) {
      return this.props.data.map(function(person) {
        return <div key={person.name}>{person.name} - {person.craft}</div>
      })
    }
  }
  render() {
    return (
      <div>
        <span>Current Astronauts in Space:</span>
        <strong>
          {this.returnData()}
        </strong>
      </div>
    )
  }

}

export default ExampleComponent;
