import React, { Component } from 'react';


class App extends Component {

    componentDidMount() {
            fetch('http://api.open-notify.org/astros.json')
            .then(function(response) {
              return response.json();
            })
            .then(function(myJson) {
           JSON.stringify(myJson);
            });   
        }

        render() {
            return(
                <p></p>
            )
        }
    }

    export default App;

