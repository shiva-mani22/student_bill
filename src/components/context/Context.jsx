import React, { createContext, useState } from 'react'
export let contextApi=createContext()
const {Provider}=contextApi
const Context = ({children}) => {

    let [globalState,setGlobalState]=useState({
        token:null
    })
    
  return (
    <Provider value={{globalState,setGlobalState}}>{children}</Provider>
  )
}

export default Context