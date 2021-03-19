import React from 'react';
import templogo from 'D:/Project Related (PERSONAL)/sinecure/server/client/src/templogo.png';
import NavBar from './components/Navbar'

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
        <div className="container">
          <div><br></br><br></br></div>
          <div className="centerednav">
            <NavBar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
