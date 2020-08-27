import React from 'react';
import Typewriter from 'typewriter-effect';

import './App.css';

function App() {
  return (
    <div>
    <div className="App">



      <h2>Hello World!</h2>
      <h1>
      <Typewriter delay
  onInit={(typewriter) => {
    typewriter.typeString('Welcome to DevIdea.')
      .start();
  }}
/>
      </h1>
      <h4>Convert your Ideas into real world application.</h4>
      <h4>Get your Business Online.</h4>
      <h3 className="wish">The Best part is: <strong >Pay as you WISH</strong></h3>
      </div>
      <h1 style={{marginLeft:'20px'}}>Our Projects: </h1>
<div className="projects">
  <div className="pro">
  </div>
  <div className="pro">
  </div>
  <div className="pro">
  </div>
  

  </div>
<div className="footer">Contact us: Jugalporwal97@gmail.com , Lokeshdangi002@gmail.com</div>
  </div>
  );
}

export default App;
