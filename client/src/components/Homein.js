import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const Homein = () => {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext)
    const renderList = ()=>{
        const who = (localStorage.getItem("who"))
        console.log(who)
        if (who=="dev"){
            return[
                <li id="mag"><Link to="/allpost" style={{color:"#fff", padding:"25px"}}><i className="fa fa-home" className="activein"></i></Link></li>,
                <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i className="fa fa-envelope"></i></Link></li>,
                <li id="mag"><Link to="/profiledev" style={{color:"#fff", padding:"25px"}} ><i className="fa fa-user" ></i></Link></li>
            ]
        }else if(who=="org"){
            history.push('/profileorg')
        }
    }

    const [data, setData] = useState([])
    useEffect(()=>{
            fetch('/allpost',{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                setData(result.posts)
            })
    },[])

    return (
        <div className="outsidediv">
            <div className="nav-in" id="navbar-in">
                        <ul>
                            {renderList()}
                        </ul>
            </div>
            <div className="insidediv">
                <br></br>

                <div className="innerprofs-re">
                    {
                        data.map(item=>{
                            return(
                                <div style={{}}>
                                    <img style={{borderRadius:"25px",width:"50px", height:"50px",border:"2px solid #fff"}} src={item.photo}>
                                    </img>
                                    <h1 style={{color:"#fff"}}>{item.postedBy.name}</h1>
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
    )
}

export default Homein
