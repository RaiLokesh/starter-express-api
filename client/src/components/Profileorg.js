import React, {useState, useContext, useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'

const Profileorg = () => {
    const history = useHistory()
    let {state, dispatch} = useContext(UserContext)
    const who = (localStorage.getItem("who"))
    const renderList = ()=>{
        console.log(who)
        if (who=="dev"){
            return[
                <li id="mag"><Link to="/allpost" style={{color:"#fff", padding:"25px"}}><i className="fa fa-home activein"></i></Link></li>,
                <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i className="fa fa-envelope"></i></Link></li>,
                <li id="mag"><Link to="/profiledev" style={{color:"#fff", padding:"25px"}}><i className="fa fa-user" ></i></Link></li>,
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
                <li id="mag"><Link to="/profileorg" style={{color:"#fff", padding:"25px"}}><i className="fa fa-user activein" ></i></Link></li>,
                <li id="mag"><Link to ="#"><button onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    M.toast({html:"Logged out!", classes:"#64dd17 light-green accent-4"})
                    history.push('/')
                    }} style={{color:"red", top:"100%"}} ><i className="fa fa-sign-out" ></i></button></Link></li>
                
               
            ]
        }
    }
    const [data, setData] = useState([])
    useEffect(()=>{
            fetch('http://localhost:5000/mypost',{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                setData(result.mypost)
            })
    },[])
    const deletepost = (postid)=>{
        fetch(`http://localhost:5000/deletepost/${postid}`,{
            method:"delete", 
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            
        })
        

    }
    if (who == "org"){
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
                            
                            <h1 className="styles" style={{fontSize:"40px",fontFamily: "'Dancing Script', cursive", textAlign:"left",paddingLeft:"1.5%"}}>
                                {state.name}
                                </h1>
                            <p className="styles" style={{fontFamily: "'Dancing Script', cursive", fontSize:"20px",textAlign:"left",paddingLeft:"1.5%"}}>
                                ({state.email})
                            </p>
                            
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
                                            
                                            <h5 style={{color:"#fff"}}>{item.title}</h5>
                                            <h4 style={{color:"#fff", fontFamily:"sans-serif"}}>Stipend: {item.body}</h4>
                                            <h4 style={{color:"#fff", fontFamily:"sans-serif"}}>appliedby: {item.appliedBy}</h4>
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
    }else{
        return(
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
                            
                            <h1 className="styles" style={{fontSize:"40px",fontFamily: "'Dancing Script', cursive", textAlign:"left",paddingLeft:"1.5%"}}>
                                Sinecure
                            
                            <p className="styles" style={{fontFamily: "'Dancing Script', cursive", fontSize:"20px",textAlign:"left",paddingLeft:"1.5%"}}>
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

                        
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Profileorg
