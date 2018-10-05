 import React, { Component } from 'react';

 class App extends Component{

   render(){
     return(
       <div class='App'></div>
     )
   }

   componentDidMount(){
     fetch('http://api.open-notify.org/astros.json')
       .then(function(response) {
         return response.json();
       })
       .then(function(myJson) {
         console.log(JSON.stringify(myJson));
       });
   }

 }

export default App
