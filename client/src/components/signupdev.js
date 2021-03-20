import React from 'react'
import  {Link} from 'react-router-dom'

const SUD = ()=>{
  return(
    <div style = {{fontFamily: "'Poppins', sans-serif"}}>
        
        
            
        <h1>Signup</h1>
            
            <form action="" method="post">
                <input 
                    type="text"
                    placeholder="Enter Name"
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
                <Link to="/signindev" style={{color:"black"}}>Signin Instead?</Link>
            </center>
            
    </div>
  )
}

export default SUD