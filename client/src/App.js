import React from 'react';
import templogo from 'D:/Project Related (PERSONAL)/sinecure/server/client/src/templogo.png';
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Route} from 'react-router-dom'
import ContactUs from './components/ContactUs';

//font used: Questrial - 400

function App() {
  
  return (
    <BrowserRouter>
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
            <Route exact  path="/">
            <div className="containersx">
            
            <Home/>
            
            </div>
          </Route>
          <Route path="/about">
            <div className="containersx">
            
            <About/>
            
            </div>
          </Route>
          <Route path="/contactus">
            <div className="containersx">
            
            <ContactUs/>
            
            </div>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;