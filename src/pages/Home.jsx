import React,{useState,useEffect} from 'react'
import Child from '../components/child'

const Home = () => {
    const [storedInfo, setStoredInfo]=useState(null)
     useEffect(()=>{
    const saved = localStorage.getItem("loginInfo");
    if (saved){
      setStoredInfo(JSON.parse(saved));
    }
  },[]);
  return (
    <div className='flex justify-center items-center'>
      {/* <Child data="Hello"/> */}
      <h1>user data:{storedInfo?.name}</h1> <br />
      <h1>pass:{storedInfo?.password}</h1>
    </div>
  )
}

export default Home