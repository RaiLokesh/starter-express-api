import React from 'react';
import templogo from 'D:/Project Related (PERSONAL)/sinecure/server/client/src/templogo.png';
import NavBar from './components/Navbar'
import Home from './components/Home';

//font used: Questrial - 400

function App() {
  
  return (
    <div>
      <div className = "split left">
      <div className="centered">
        <img src={templogo} className = "centered"></img>
      </div>
      </div>
      <div className = "split right">
          <div><br></br><br></br></div>
          <div className="centerednav">
            <NavBar/>
            </div>
          <div className="containersx">
            <Home/>
          </div>
        </div>
      </div>
  );
}

export default App;