import React from 'react'
import {Link} from 'react-router-dom'
import templogo from 'D:/Project Related (PERSONAL)/sinecure/server/client/src/templogo.png';

const Home = ()=>{
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
        
            <h1>Welcome</h1>
            
            Join the website to get/provide offers. You can join as a Developer and choose to work for an Organisation or Company and in return get paid for your Work, Or hire developers for your Organisation or Company.
        
        <br></br><br></br><br></br>
        
            <center>
                <p>
                <Link to="/signupdev" className="btn btn-ful">I am a Developer</Link>
                </p>
                <p>
                <Link to="/signuporg" className="btn btn-full">We are an Organisation</Link>
                </p>
            </center>
       </div> 
    
    </div>
    </div>
    
  )
}

export default Home