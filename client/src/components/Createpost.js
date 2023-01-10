import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {UserContext} from '../App'

const Createpost = () => {
    const {state, dispatch} = useContext(UserContext)
    const renderList = ()=>{
        const who = (localStorage.getItem("who"))
        console.log(who)
        if (who=="dev"){
            history.push('/profiledev')
        }else if(who=="org"){
            return[
                <li id="mag"><Link to="/createjob" style={{color:"#fff", padding:"25px"}}><i className="fa fa-edit activein"></i></Link></li>,
                <li id="mag"><Link to="/profileorg" style={{color:"#fff", padding:"25px"}} ><i className="fa fa-user" ></i></Link></li>,
                <li id="mag"><Link to ="#"><button onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    M.toast({html:"Logged out!", classes:"#64dd17 light-green accent-4"})
                    history.push('/')
                    }} style={{color:"red", top:"100%"}} ><i className="fa fa-sign-out" ></i></button></Link></li>
                
            ]
        }
    }
    const history = useHistory()
    const [title, setTitle] = useState("")
    const[body, setBody] = useState("")
    const PostData = ()=>{
        fetch("http://localhost:5000/createpost",{
            method:"post",
            headers:{
              "Content-Type":"application/json",
              "Authorization": "Bearer "+localStorage.getItem('jwt')
        },
        body:JSON.stringify({
            title,
            body
        })
        }).then(res=>res.json())
        .then(data=>{
        if (data.error){
            M.toast({html: data.error, classes:"#f44336 red"})
        }
        else{
            M.toast({html:"Job Created!", classes:"#64dd17 light-green accent-4"})
            history.push('/profileorg')
        }
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
            
            <div className="centered">
                
                 <input 
                        type="text"
                        placeholder="Enter about job"
                        style={{color:"#fff", padding:"40px", borderColor:"#fff"}}
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Enter Stipend"
                        style={{color:"#fff", padding:"40px", borderColor:"#fff"}}
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}
                    />
                   <br></br><br></br><br></br>
                    <center><button onClick={()=>PostData()}  className="newbutton" style={{color:"#fff", padding:"50px"}}>Create Job</button></center>
                
    
                    
                    
            </div>
        </div>
        
        
    )
}

export default Createpost
