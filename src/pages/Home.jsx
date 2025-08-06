import React,{useState,useEffect} from 'react'
import Child from '../components/child'
import { useMyContext } from '../components/Context'

const Home = () => {
    const [storedInfo, setStoredInfo]=useState(null)
  const { state, setState, anotherFunction, initialState } = useMyContext();

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
      <h1>Context data: {state}</h1>
      <h1>Initial State: {initialState.count}</h1>
      <button onClick={()=>setState("NEw String")}>Change Context</button>
      <button onClick={anotherFunction}>Call Another Function</button>
    </div>
  )
}

export default Home