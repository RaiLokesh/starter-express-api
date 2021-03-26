import React, {useState, useContext, useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'

const Profileorg = () => {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext)
    const renderList = ()=>{
        const who = (localStorage.getItem("who"))
        console.log(who)
        if (who=="dev"){
            return[
                <li id="mag"><Link to="/allpost" style={{color:"#fff", padding:"25px"}}><i className="fa fa-home"></i></Link></li>,
                <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i className="fa fa-envelope"></i></Link></li>,
                <li id="mag"><Link to="/profiledev" style={{color:"#fff", padding:"25px"}} className="activein"><i className="fa fa-user" ></i></Link></li>,
                
               
            ]
        }else if(who=="org"){
            return[
                <li id="mag"><Link to="/createjob" style={{color:"#fff", padding:"25px"}}><i className="fa fa-edit"></i></Link></li>,
                <li id="mag"><Link to="/profileorg" style={{color:"#fff", padding:"25px"}} className="activein"><i className="fa fa-user" ></i></Link></li>,
                
               
            ]
        }
    }
    const [data, setData] = useState([])
    useEffect(()=>{
            fetch('/mypost',{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                setData(result.mypost)
            })
    },[])
    return (
        
        <div className="outsidediv">
            <div className="nav-in" id="navbar-in">
                        <ul>
                            
                            {renderList()}
                            
                        </ul>
            </div>
            <div className="nav-out">
                    <button class="logout" onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    M.toast({html:"Logged out!", classes:"#64dd17 light-green accent-4"})
                    history.push('/')
                    }} style={{color:"green",fontSize:"50px", top:"100%"}} ><i className="fa fa-sign-out" ></i></button>
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
                        
                        <div className="myposts-re">
                            
                            {
                                data.map(item=>{
                                    return(
                                        <div style={{}}>
                                            
                                            <p style={{color:"#fff"}}>{item.title}</p>
                                            <h4 style={{color:"#fff", fontFamily:"sans-serif"}}>Stipend: {item.body}</h4>
                                            <br></br>
                                            <button className="newbutton">Apply</button>
                                            <br></br>
                                            <hr></hr>
                                            <br></br>
                                            <br></br>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Profileorg
