import React from 'react';
// create your App component here

class App extends React.Component {

    render() {
      return (
        <div>I'm right here!!</div>
      )
    }

    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(resp => console.log(resp));
    }

}

export default App;
