import React from 'react'
import {Link} from 'react-router-dom'
import templogo from '../templogo.png';

const Contact = ()=>{
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
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" className="active">Contact</Link></li>
                
            </ul>
          
		      </div>
        </div>
      
        <div className="containersx" style = {{fontFamily: "'Poppins', sans-serif"}}>
        
        <p>
            
            This website is currently managed by its creater himself.
             <br></br>
             If you have any suggestions for improving the website, please let me know. You can always contact me via any of the following methods.
             <br></br><br></br>
             Hope you have a nice day!
        </p>
        <br></br>
        <p style={{textAlign:"center", padding:"5px"}}>
        
        <a href="https://twitter.com/RhetoricianSays" style={{color:"#121212"}}><i class="fa fa-twitter"></i></a>
        
        
        <a href="https://www.linkedin.com/in/lokesh-rai-60a324199/" style={{color:"#121212"}}><i class="fa fa-linkedin"></i></a>
            
            
        <a href="https://github.com/RaiLokesh"><i class="fa fa-github" style={{color:"#121212"}}></i></a>
        
        </p>
       </div> 
    
    </div>
    </div>
    
  )
}

export default Contact