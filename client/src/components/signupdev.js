import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import templogo from '../templogo.png'
import M from 'materialize-css'

const SUD = ()=>{
  const history = useHistory()
  const [name,setName] = useState("")
  const [password,setPasword] = useState("")
  const [email,setEmail] = useState("")
  
  
  const PostData = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Invalid email",classes:"#f44336 red"})
      return
    }
    fetch("/signupdev",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        password,
        email
      })
    }).then(res=>res.json())
    .then(data=>{
      if (data.error){
        M.toast({html: data.error, classes:"#f44336 red"})
      }
      else{
        M.toast({html:data.message, classes:"#64dd17 light-green accent-4"})
        history.push('/signindev')
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
        
        <h1>Signup</h1>
            
            
                <input 
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    
                />
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
                <center><button onClick={()=>PostData()}>Signup</button></center>
            
            <br></br><br></br>
            <center>
                <Link to="/signindev" style={{color:"black"}}>Signin Instead?</Link>
            </center>
       </div> 
    
    </div>
    </div>
    
  )
}

export default SUD