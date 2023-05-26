import React, {useState,useContext} from 'react'
import { UserContext } from '../App'
import {Link, useHistory} from 'react-router-dom'
import templogo from '../templogo.png';
import M from "materialize-css"

const SID = ()=>{
  const {state, dispatch} = useContext(UserContext)
  const history = useHistory()
  const [password,setPasword] = useState("")
  const [email,setEmail] = useState("")
  
  
  const PostData = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Invalid email",classes:"#f44336 red"})
      return
    }
    fetch("signindev",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        
        password,
        email
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.error){
        M.toast({html: data.error, classes:"#f44336 red"})
      }
      else{
        localStorage.setItem("who", data.who)
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        dispatch({type:"USER", payload:data.user})
        M.toast({html:"signin success!", classes:"#64dd17 light-green accent-4"})
        history.push('/allpost')
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return(
    
    <div>
      <div>
      <div className = "split left">
      <div className="centered">
        <img src={templogo} className = "centered"></img>
      </div>
      </div>
      </div>
      <div className = "split right">
        <div>
          <div><br></br><br></br></div>
          <div className="centerednav" id = "navbar">

            <ul>

                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
          
		      </div>
        </div>
      
        <div className="containersx" style = {{fontFamily: "'Poppins', sans-serif"}}>
        
        <h1>Signin</h1>
            
            
                
                <input 
                    type="text"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e)=>setPasword(e.target.value)}
                />
                <br></br><br></br>
                <center><button onClick={()=>PostData()}>Signin</button></center>
            
            <br></br><br></br>
            <center>
                <Link to="/signupdev" style={{color:"black"}}>Signup Instead?</Link>
            </center>
       </div> 
    
    </div>
    </div>
    
  )
}

export default SID