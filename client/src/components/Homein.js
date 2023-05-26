import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'

const Homein = () => {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext)
    const result = JSON.parse(localStorage.getItem("user"))
    

    const renderList = ()=>{
        const who = (localStorage.getItem("who"))
        console.log(who)
        if (who=="dev"){
            return[
                <li id="mag"><Link to="/allpost" style={{color:"#fff", padding:"25px"}}><i className="fa fa-home activein" ></i></Link></li>,
                <li id="mag"><Link to="#" style={{color:"#fff", padding:"25px"}}><i className="fa fa-envelope"></i></Link></li>,
                <li id="mag"><Link to="/profiledev" style={{color:"#fff", padding:"25px"}} ><i className="fa fa-user" ></i></Link></li>,
                <li id="mag"><Link to ="#"><button onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    M.toast({html:"Logged out!", classes:"#64dd17 light-green accent-4"})
                    history.push('/')
                    }} style={{color:"red", top:"100%"}} ><i className="fa fa-sign-out" ></i></button></Link></li>
                
                
            ]
        }else if(who=="org"){
            history.push('/profileorg')
        }
    }

    const [data, setData] = useState([])
    useEffect(()=>{
            fetch('allpost',{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                console.log(result)
                setData(result.posts)
            })
    },[])

    const applyfor=(id)=>{
        fetch('apply',{
            method:'put',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }
    const unapplyfor=(id)=>{
        fetch('unapply',{
            method:'put',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    

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
                                    <h5 style={{color:"#fff"}}>{item.title}</h5>
                                    <h4 style={{color:"#fff", fontFamily:"sans-serif"}}>Stipend: {item.body}</h4>
                                    <br></br>
                                    
                                    {item.appliedBy.includes(result._id)
                                    
                                    
                                    ?
                                    <button className="newbutton" onClick={()=>{unapplyfor(item._id)}}>Unapply</button>
                                    :
                                    <button className="newbutton" onClick={()=>{applyfor(item._id)}}>Apply</button>
                                    }
                                    
                                    <p style={{color:"#fff"}}>{item.appliedBy.length} applied.</p>
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
