// create your App component here
import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            people: []
          };
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then (results => results.json())
        .then (results => {
              this.setState({people: results.people})
        })
        
    }
    
    displayPeople(){
       return this.state.people.map(person => <li>{person.name}</li>)
    }
    
    render() {
        return(
            <div>
                <ul>
                    {this.displayPeople.bind(this)()} 
                </ul>
            </div>
        )  
    
    }
}

export default App ;