import React from 'react'
import { createContext, useContext, useState } from 'react'


const MyContext = createContext(null);



const Contextfun = ({children}) => {
    const [state, setState] = useState("hello world");
    const initialState = { count: 0 };

    

    const anotherFunction = () => {
        alert("This is another function");
    }

  return (
    <MyContext.Provider value={{ state, setState, anotherFunction, initialState }}>
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a Contextfun");
  }
  return context;
};

export default Contextfun;

