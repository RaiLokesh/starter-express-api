import React from 'react';
import templogo from 'D:/Project Related (PERSONAL)/sinecure/server/client/src/templogo.png';
import NavBar from './components/Navbar'


function App() {
  
  return (
    <div>
      <div className = "split left">
      <div className="centered">
        <img src={templogo}></img>
        
      </div>
      </div>
      <div className = "split right">
        <div className="container">
          <NavBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
