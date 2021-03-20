import React from 'react'
import  {Link} from 'react-router-dom'
const SID = ()=>{
  return(
    <div style = {{fontFamily: "'Poppins', sans-serif"}}>
        
        
            
        <h1>Signin</h1>
            
            <form action="" method="post">
                
                <input 
                    type="text"
                    placeholder="Enter Email ID"
                />
                <input 
                    type="password"
                    placeholder="Enter Password"
                />
                <center><button type="submit">Signin</button></center>
            </form> 
            <br></br>
            <center>
                <Link to="/signupdev" style={{color:"black"}}>Signup Instead?</Link>
            </center>
            
    </div>
  )
}

export default SID