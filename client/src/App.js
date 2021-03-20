import React from 'react';
import templogo from 'D:/Project Related (PERSONAL)/sinecure/server/client/src/templogo.png';
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import SUD from './components/signupdev'
import SUO from './components/signuporg'
import SID from './components/signindev'
import SIO from './components/signinorg'
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './components/Contact';

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
          <Route path="/contact">
            <div className="containersx">
            
            <Contact/>
            
            </div>
          </Route>
          <Route path="/signupdev">
            <div className="containersx">
            
            <SUD/>
            
            </div>
          </Route>
          <Route path="/signuporg">
            <div className="containersx">
            
            <SUO/>
            
            </div>
          </Route>
          <Route path="/signindev">
            <div className="containersx">
            
            <SID/>
            
            </div>
          </Route>
          <Route path="/signinorg">
            <div className="containersx">
            
            <SIO/>
            
            </div>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;