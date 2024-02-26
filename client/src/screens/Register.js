import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

function Register() {
    const [name, setName] = useState();
    const [emial, setMail] = useState();
    const [password , setPass] = useState();
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8888/register",{name,emial,password}).then(result => {console.log(result);
    navigate("/login")}).catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="password" class="form-control" id="name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setMail(e.target.value)}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=> setPass(e.target.value)}/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                
            </form>
            <div><div id="loginhelp" class="form-text">If you are alredy a user plesae login.</div>

<Link to="/login" type="submit" class="btn btn-primary">Login</Link></div>

        </div>
    )
}

export default Register
