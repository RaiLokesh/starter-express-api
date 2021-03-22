import React from 'react'
import {Link} from 'react-router-dom'
import templogo from '../templogo.png';

const SUO = ()=>{
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
            
            <form action="" method="post">
                <input 
                    type="text"
                    placeholder="Enter Organisation Name"
                />
                <input 
                    type="text"
                    placeholder="Enter Email ID"
                />
                <input 
                    type="password"
                    placeholder="Enter Password"
                />
                <center><button type="submit">Signup</button></center>
            </form> 
            <br></br>
            <center>
                <Link to="/signinorg" style={{color:"black"}}>Signin Instead?</Link>
            </center>
       </div> 
    
    </div>
    </div>
    
  )
}

export default SUO