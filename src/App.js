import React from 'react'

class App extends React.Component{

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
              .then(data => data.json())
              .then(people => console.log(people))
    }
    render(){
        return(
            <div>Sup</div>
        )
    }
}

export default App
