import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Axios from 'axios';
import './App.css';

import VideoComponent from './VideoComponent.js';

class App extends React.Component {
  state={
    videoCardssdada:[]
  }


  // componentDidMount(){
  //   Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
  //   .then((response) => {
  //     console.log(response.data);
  //     
      
  //   })
  // }
  render() {

    
    return (
      
      <div>
       <VideoComponent />
      </div>
    );
  }
 
}


 


export default App;
