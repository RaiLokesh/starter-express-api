import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'

const Profileorg = () => {
    const {state, dispatch} = useContext(UserContext)
    const renderList = ()=>{
        const who = (localStorage.getItem("who"))
        console.log(who)
        if (who=="dev"){
            return[
                <li id="mag"><Link to="/allpost" style={{color:"#fff", padding:"25px"}}><i className="fa fa-home"></i></Link></li>,
                <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i className="fa fa-envelope"></i></Link></li>,
                <li id="mag"><Link to="/profiledev" style={{color:"#fff", padding:"25px"}} className="activein"><i className="fa fa-user" ></i></Link></li>
            ]
        }else if(who=="org"){
            return[
                <li id="mag"><Link to="/createjob" style={{color:"#fff", padding:"25px"}}><i className="fa fa-edit"></i></Link></li>,
                <li id="mag"><Link to="/profileorg" style={{color:"#fff", padding:"25px"}} className="activein"><i className="fa fa-user" ></i></Link></li>
            ]
        }
    }
    return (
        
        <div className="outsidediv">
            <div className="nav-in" id="navbar-in">
                        <ul>
                            
                            {renderList()}
                            
                        </ul>
            </div>
            <div className="insidediv">

                    <br></br><br></br><br></br>
                    <div className="back">
                            
                            <img className="img-pos" style={{width:"160px", height:"160px", borderRadius:"80px", border:"5px solid #121212", backgroundColor:"#fff"}} src = "https://github.com/RaiLokesh/Sinecure/blob/master/client/public/logo.png?raw=true" />
                            
                            <h1 className="styles" style={{fontSize:"40px",fontFamily: "'Dancing Script', cursive", textAlign:"left"}}>
                                Sinecure
                            
                            <p className="styles" style={{fontFamily: "'Dancing Script', cursive", fontSize:"20px",textAlign:"left"}}>
                                (sinecure)
                            </p>
                            </h1>
                            <a href="#" style={{color:"#fff", fontSize:"20px"}}><i className="fa fa-twitter"></i></a>
                            <a href="#" style={{color:"#fff", fontSize:"20px"}}><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-github" style={{color:"#fff", fontSize:"20px"}}></i></a>
                    <div className="innerprofs">
                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            About Us
                        </p>
                        <p className="styles" style={{textAlign:"center"}}>
                            
                            We(well technically only me) are an organisation with various on going projects, the development of this website is one of them.
                            
                        </p>

                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            Available Jobs
                        </p>
                        <p className="styles" style={{textAlign:"center"}}>
                            
                            Frontend Designer.
                           
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Profileorg
