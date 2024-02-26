import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8888/login",{name,pass}).then(result => {console.log(result);
    Navigate("/home")}).catch(err => console.log(err))
    }
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setName(e.target.value)}/>
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPass(e.target.value)}/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
  )
}

export default Login
