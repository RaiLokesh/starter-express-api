import React from 'react'
import {Link} from 'react-router-dom'

const Profileorg = () => {
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
                            
                            <img className="img-pos" style={{width:"160px", height:"160px", borderRadius:"80px", border:"5px solid #121212", backgroundColor:"#fff"}} src = "https://github.com/RaiLokesh/Sinecure/blob/master/client/public/logo.png?raw=true" />
                            
                            <h1 class="styles" style={{fontSize:"40px",fontFamily: "'Dancing Script', cursive", textAlign:"left"}}>
                                Sinecure
                            
                            <uni class="styles" style={{fontFamily: "'Dancing Script', cursive", fontSize:"20px",textAlign:"left"}}>
                                (sinecure)
                            </uni>
                            </h1>
                            <a href="#" style={{color:"#fff", fontSize:"20px"}}><i class="fa fa-twitter"></i></a>
                            <a href="#" style={{color:"#fff", fontSize:"20px"}}><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-github" style={{color:"#fff", fontSize:"20px"}}></i></a>
                    <div className="innerprofs">
                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            About Us
                        </p>
                        <me class="styles">
                            <center>
                            We(well technically only me) are an organisation with various on going projects, the development of this website is one of them.
                            </center>
                        </me>

                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            Available Jobs
                        </p>
                        <stack class="styles">
                            <center>
                            Frontend Designer.
                            </center>
                        </stack>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Profileorg
