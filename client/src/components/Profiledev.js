import React, { useContext } from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'

const Profiledev = () => {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext)
    const renderList = ()=>{
        const who = (localStorage.getItem("who"))
        
        if (who=="dev"){
            return[
                <li id="mag"><Link to="/allpost" style={{color:"#fff", padding:"25px"}}><i className="fa fa-home"></i></Link></li>,
                <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i className="fa fa-envelope"></i></Link></li>,
                <li id="mag"><Link to="/profiledev" style={{color:"#fff", padding:"25px"}}><i className="fa fa-user activein" ></i></Link></li>,
                <li id="mag"><Link to ="#"><button onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    M.toast({html:"Logged out!", classes:"#64dd17 light-green accent-4"})
                    history.push('/')
                    }} style={{color:"red", top:"100%"}} ><i className="fa fa-sign-out" ></i></button></Link></li>
                
                
            ]
        }else if(who=="org"){
            return[
                <li id="mag"><Link to="/createjob" style={{color:"#fff", padding:"25px"}}><i className="fa fa-edit"></i></Link></li>,
                <li id="mag"><Link to="/profileosrg" style={{color:"#fff", padding:"25px"}}><i className="fa fa-user activein" ></i></Link></li>,
                <li id="mag"><Link to ="#"><button onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    M.toast({html:"Logged out!", classes:"#64dd17 light-green accent-4"})
                    history.push('/')
                    }} style={{color:"red", top:"100%"}} ><i className="fa fa-sign-out" ></i></button></Link></li>
                
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
                            
                            <img className="img-pos" style={{width:"160px", height:"160px", borderRadius:"80px", border:"5px solid #121212", backgroundColor:"#fff"}} src = "https://github.com/RaiLokesh/Portfolio/blob/master/img/abt.png?raw=true" />
                            
                            <h1 className="styles" style={{fontSize:"40px",fontFamily: "'Dancing Script', cursive", textAlign:"left", paddingLeft:"1.5%"}}>
                                {state.name}
                                </h1>
                            <p className="styles" style={{fontFamily: "'Dancing Script', cursive", fontSize:"20px",textAlign:"left",paddingLeft:"1.5%"}}>
                                ({state.email})
                            </p>
                            
                            <a href="https://twitter.com/RhetoricianSays" style={{color:"#fff", fontSize:"20px"}}><i className="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/lokesh-rai-60a324199/" style={{color:"#fff", fontSize:"20px"}}><i className="fa fa-linkedin"></i></a>
                            <a href="https://github.com/RaiLokesh"><i className="fa fa-github" style={{color:"#fff", fontSize:"20px"}}></i></a>
                    <div className="innerprofs">
                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            About Me
                        </p>
                        <p className="styles" style={{textAlign:"center"}}>
                            
                            I am a student in IIIT Kottayam, Kerala.
                            I am Interested in Machine Learning, AI and full stact development.
                            I am also starting to contribute in open-source applications.
                            Currently I am looking for an idea for my next project, If you have one and willing to let me in, I'll be extremly happy to contribute.
                            
                        </p>

                        <p style={{textAlign:"center", fontSize:"40px"}} className="styles">
                            My Stacks
                        </p>
                        <p className="styles" style={{textAlign:"center"}}>
                            
                            I am familiar with, MERN, flask, django in webdev, and also Kotlin for android dev.<br></br>
                            I have also worked with jupyter in the feild of ds and planning to learn more.
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Profiledev
