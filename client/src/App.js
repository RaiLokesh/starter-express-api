import React,{useEffect,createContext, useReducer, useContext} from 'react';
import Home from './components/Home'
import About from './components/About'
import SUD from './components/signupdev'
import SUO from './components/signuporg'
import SID from './components/signindev'
import SIO from './components/signinorg'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Contact from './components/Contact'
import Profiledev from './components/Profiledev'
import Profileorg from './components/Profileorg'
import Homein from './components/Homein';
import Createpost from './components/Createpost';
import {reducer, initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  useEffect(()=>{
    const user = (localStorage.getItem("user"))
    console.log(user)
    if(!user){
      
      history.push('/')
        
    }
    },[])
  

  return(
    <Switch>
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

        <Route path="/allpost">
          <Homein/>
        </Route>

        <Route path="/createjob">
          <Createpost/>
        </Route>
      </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value = {{state, dispatch}}>
    <BrowserRouter>
      <div>
        <Routing/>
      
    </div>   
      
    </BrowserRouter>
      
    </UserContext.Provider>
  );
}

export default App;