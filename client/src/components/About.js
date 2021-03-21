import React from 'react'
import {Link} from 'react-router-dom'
import templogo from 'D:/Project Related (PERSONAL)/sinecure/server/client/src/templogo.png';

const About = ()=>{
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

                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" className="active">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
          
		      </div>
        </div>
      
        <div className="containersx" style = {{fontFamily: "'Poppins', sans-serif"}}>
          
            <h1>Hey!</h1>
            
            This website is created basically for 
            developers willing to start their 
            freelancer journey. Organisations 
            post their job notifications and select
            applicants on the basis of their profiles.
            So what are you waiting for, come on lets start
             your journey on Sinecure.
             <br></br><br></br>
          
        
        <p style={{textAlign:"right"}}>
            -Admin
        </p>
        
            
       </div> 
    
    </div>
    </div>
    
  )
}

export default About