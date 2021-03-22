import React from 'react'
import {Link} from 'react-router-dom'

const Profiledev = () => {
    return (
        <div className="outsidediv">
            <div className="insidediv">
                
                    <div className="nav-in" id="navbar-in">
                        <ul>
                            
                            <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i class="fa fa-home"></i></Link></li>
                            <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i class="fa fa-envelope"></i></Link></li>
                            <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}} class="activein"><i class="fa fa-user" ></i></Link></li>
                            
                        </ul>
                    </div>
                
                    <br></br><br></br><br></br>
                    <div className="back">
                            
                            <img className="img-pos" style={{width:"160px", height:"160px", borderRadius:"80px", border:"5px solid #121212", backgroundColor:"#fff"}} src = "https://github.com/RaiLokesh/Portfolio/blob/master/img/abt.png?raw=true" />
                            
                            <h1 class="styles" style={{fontSize:"40px",fontFamily: "'Dancing Script', cursive", textAlign:"left"}}>
                                Lokesh Rai
                            
                            <uni class="styles" style={{fontFamily: "'Dancing Script', cursive", fontSize:"20px",textAlign:"left"}}>
                                (RaiLokesh)
                            </uni>
                            </h1>
                            <a href="https://twitter.com/RhetoricianSays" style={{color:"#fff", fontSize:"20px"}}><i class="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/lokesh-rai-60a324199/" style={{color:"#fff", fontSize:"20px"}}><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/RaiLokesh"><i class="fa fa-github" style={{color:"#fff", fontSize:"20px"}}></i></a>
                    <div className="innerprofs">
                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            About Me
                        </p>
                        <me class="styles">
                            <center>
                            I am a student in IIIT Kottayam, Kerala.
                            I am Interested in Machine Learning, AI and full stact development.
                            I am also starting to contribute in open-source applications.
                            Currently I am looking for an idea for my next project, If you have one and willing to let me in, I'll be extremly happy to contribute.
                            </center>
                        </me>

                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            My Stacks
                        </p>
                        <stack class="styles">
                            <center>
                            I am familiar with, MERN, flask, django in webdev, and also Kotlin for android dev.<br></br>
                            I have also worked with jupyter in the feild of ds and planning to learn more.
                            </center>
                        </stack>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Profiledev
