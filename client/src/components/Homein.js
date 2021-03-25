import React from 'react'
import {Link} from 'react-router-dom'

const Homein = () => {
    return (
        <div className="outsidediv">
            <div className="nav-in" id="navbar-in">
                        <ul>
                            
                            <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}} className="activein"><i className="fa fa-home"></i></Link></li>
                            <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i className="fa fa-envelope"></i></Link></li>
                            <li id="mag"><Link to="/profiledev" style={{color:"#fff", padding:"25px"}}><i className="fa fa-user" ></i></Link></li>
                            
                        </ul>
            </div>
            <div className="insidediv">
                <br></br>

                <div className="innerprofs-re">
                    <div style={{}}>
                        <img style={{borderRadius:"25px",width:"50px", height:"50px",border:"2px solid #fff"}} src="https://github.com/RaiLokesh/Sinecure/blob/master/client/public/logo.png?raw=true">
                        </img>
                        <h1 style={{color:"#fff"}}>Sinecure</h1>
                        <p style={{color:"#fff"}}>We require a frontend developer for improving UI for our website</p>
                        <h4 style={{color:"#fff", fontFamily:"sans-serif"}}>Stipend: Unpaid</h4> 
                        <br></br>
                        <button className="newbutton">Apply</button>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <br></br>
                    </div>
                    
                    <div style={{}}>
                        <img style={{borderRadius:"25px",width:"50px", height:"50px",border:"2px solid #fff"}} src="https://github.com/RaiLokesh/Sinecure/blob/master/client/public/logo.png?raw=true">
                        </img>
                        <h1 style={{color:"#fff"}}>Sinecure</h1>
                        <p style={{color:"#fff"}}>We require a frontend developer for improving UI for our website</p>
                        <h4 style={{color:"#fff", fontFamily:"sans-serif"}}>Stipend: Unpaid</h4> 
                        <br></br>
                        <button className="newbutton">Apply</button>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <br></br>
                    </div>

                    <div style={{}}>
                        <img style={{borderRadius:"25px",width:"50px", height:"50px",border:"2px solid #fff"}} src="https://github.com/RaiLokesh/Sinecure/blob/master/client/public/logo.png?raw=true">
                        </img>
                        <h1 style={{color:"#fff"}}>Sinecure</h1>
                        <p style={{color:"#fff"}}>We require a frontend developer for improving UI for our website</p>
                        <h4 style={{color:"#fff", fontFamily:"sans-serif"}}>Stipend: Unpaid</h4> 
                        <br></br>
                        <button className="newbutton">Apply</button>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <br></br>
                    </div>
                
                </div>
                

                    
                
            </div>
        </div>
    )
}

export default Homein
