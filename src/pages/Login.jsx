import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import Child from '../components/child';

const Login = () => {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name==""||password==""){
      alert("Please fill both Name and Password")
      
    }else{
      const data = {name, password}
    localStorage.setItem("loginInfo", JSON.stringify(data));
      setName("")
      setPassword("")
      alert("Logged in successfully.")
      navigate("/")
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-1/2 h-1/2 relative bg-blue-400 gap-5 flex flex-col justify-center items-center'>
        <input type="text" value={name} placeholder='Username' onChange={(e)=>setName(e.target.value)} className='w-fit h-fit relative bg-white border border-black rounded text-black'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' className='w-fit h-fit relative bg-white  border border-black rounded text-black'/>
        <button type='submit' className='w-fit '>Submit</button>
      </form>
      <Child data="new data"/>
    </div>
  )
}

export default Login