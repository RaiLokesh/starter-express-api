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
                            
                            <h1 class="styles" style={{textAlign:"left"}}>
                                Lokesh Rai
                            </h1>
                        
                        <p>
                        
                        </p>

                    </div>
            </div>
        </div>
        
        
    )
}

export default Profiledev
