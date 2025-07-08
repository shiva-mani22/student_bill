import React, { useContext, useEffect, useState } from 'react'
import { contextApi } from '../../../context/Context'
import empServices from '../../../../service/empService'

const Home = () => {
  const {globalState}=useContext(contextApi)
  const [allBills,setAllBills]=useState([])

  console.log(globalState.token);
  useEffect(()=>{
    (async ()=>{
      let data=await empServices.allBills(globalState.token)
       if(data.status==200){
      setAllBills((preVal)=>([...preVal,...data.data.bills]))
     }
    })();
  },[])
   console.log(allBills);
  return (
    <div>
      <div className='border-b-cyan-950 h-[100px] w-[100px]'>home</div>
    </div>
  )
}

export default Home