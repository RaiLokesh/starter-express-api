import React from 'react';
import Home from './components/Home'
import About from './components/About'
import SUD from './components/signupdev'
import SUO from './components/signuporg'
import SID from './components/signindev'
import SIO from './components/signinorg'
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './components/Contact'
import Profiledev from './components/Profiledev'
import Profileorg from './components/Profileorg'
import Homein from './components/Homein';


function App() {
  
  return (
    <BrowserRouter>
      <div>

        <Route exact path="/">
          <Home/>
        </Route>
            
        <Route path="/about">
          <About/>
        </Route>
            
        <Route path="/contact">
          <Contact/>
        </Route>
            
        <Route path="/signupdev">
          <SUD/>
        </Route>
            
        <Route path="/signuporg">
          <SUO/>
        </Route>
            
        <Route path="/signindev">
          <SID/>
        </Route>
            
        <Route path="/signinorg">
          <SIO/>
        </Route>

        <Route path="/profiledev">
          <Profiledev/>
        </Route>

        <Route path="/profileorg">
          <Profileorg/>
        </Route>

        <Route path="/home">
          <Homein/>
        </Route>
          
      </div>
    </BrowserRouter>
      
      
    
  );
}

export default App;