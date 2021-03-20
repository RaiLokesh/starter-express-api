import React from 'react'

const Home = ()=>{
  return(
    <div className = "w3-container" style = {{fontFamily: "'Poppins', sans-serif"}}>
        <p>
            <h1>Welcome</h1>
            
            Join the website to get/provide offers. You can join as a Developer and choose to work for an Organisation or Company and in return get paid for your Work, Or hire developers for your Organisation or Company.
        </p>
        <br></br><br></br><br></br>
        <p>
            <center>
                <p>
                <a href="#" class="btn btn-ful">I am a Developer</a>
                </p>
                <p>
                <a href="#" class="btn btn-full">We are an Organisation</a>
                </p>
            </center>
        </p>
    </div>
  )
}

export default Home