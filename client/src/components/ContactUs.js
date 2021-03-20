import React from 'react'

const ContactUs = ()=>{
  return(
    <div className = "w3-container" style = {{fontFamily: "'Poppins', sans-serif"}}>
        <p>
            
            This website is currently managed by its creater himself.
             <br></br>
             If you have any suggestions for improving the website, please let me know. You can always contact me via any of the following methods.
             <br></br><br></br>
             Hope you have a nice day!
        </p>
        <br></br>
        <p style={{textAlign:"center", padding:"5px"}}>
        
        <a href="https://twitter.com/RhetoricianSays" style={{color:"black"}}><i class="fa fa-twitter"></i></a>
        
        
		<a href="https://www.linkedin.com/in/lokesh-rai-60a324199/" style={{color:"black"}}><i class="fa fa-linkedin"></i></a>
        
        
		<a href="https://github.com/RaiLokesh"><i class="fa fa-github" style={{color:"black"}}></i></a>
        
        </p>
        
    </div>
  )
}

export default ContactUs