import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';



import Image from './components/Image';



const App = function() {


 const [highscore,sethighscore]=useState(0);
  



  return (



    <div className="App">


     
      <Header highscore={highscore}/>



      <Image />



      



    </div>



  );



}







export default App;



