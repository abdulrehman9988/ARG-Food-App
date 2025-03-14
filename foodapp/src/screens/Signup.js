import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

  const [credentials, setCredentials]=useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response =await fetch('http://localhost:7000/api/createuser',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    });
    const json=await response.json()
    console.log(json);
    if (!json.success){ 
      alert("Enter valid credentials")
    }
  }

  const onChange=(event)=>{
      setCredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="name" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      name='name'
      value={credentials.name}
      onChange={onChange}
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      name='email'
      value={credentials.email}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={onChange}
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      name='password'
      value={credentials.password}
      onChange={onChange}
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      location
    </label>
    <input
      type="text"
      name='geolocation'
      value={credentials.geolocation}
      onChange={onChange}
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
  <Link to='/login' className='m-3 btn btn-primary'>Already a user</Link>
</form>

</div>
    </>
  )
}
