import React from 'react'
import {Link} from 'react-router-dom'


const Home = ()=>{
  return(
    <div style = {{fontFamily: "'Poppins', sans-serif"}}>
        <p>
            <h1>Welcome</h1>
            
            Join the website to get/provide offers. You can join as a Developer and choose to work for an Organisation or Company and in return get paid for your Work, Or hire developers for your Organisation or Company.
        </p>
        <br></br><br></br><br></br>
        <p>
            <center>
                <p>
                <Link to="/signupdev" class="btn btn-ful">I am a Developer</Link>
                </p>
                <p>
                <Link to="/signuporg" class="btn btn-full">We are an Organisation</Link>
                </p>
            </center>
        </p>
    </div>
  )
}

export default Home