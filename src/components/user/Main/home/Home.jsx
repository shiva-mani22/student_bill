import React, { useContext, useEffect, useState } from 'react'
import { contextApi } from '../../../context/Context'
import empServices from '../../../../service/empService'
import { useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Home = () => {
  const {globalState}=useContext(contextApi)
  const [allBills,setAllBills]=useState([])
  let {state}=useLocation()
  const navigate=useNavigate();
  // console.log(globalState.token);
  useEffect(()=>{
    (async ()=>{
      let data=await empServices.allBills(globalState.token)
       if(data.status==200){
      setAllBills((preVal)=>([...preVal,...data.data.bills]))
     }
    })();
  },[])
  //  console.log(allBills);

  const handelUpateBills=(bill)=>{
    navigate("updateBills",{state:bill})
  }

  const handelDeleteBills=(id)=>{
    (async()=>{
     try {
      let data=await empServices.deleteBills(globalState.token,id)
      console.log(data);
      if(data.status==200){
      toast.success(`${data.data.message}`)
      setAllBills((preVal)=>preVal.filter((val)=>val._id!=data.data.bill._id))
      }      else {
        toast.error("something went wrong")
      }
     } catch (error) {
        toast.error("something went wrong")
     }
      
        })();
  }
  return (
     <div className="w-full min-h-screen p-6 bg-gray-100 flex flex-wrap gap-6 justify-center">
      {allBills.map((bill, index) => (
        <div
          key={index}
          className="w-80 h-60 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 p-6 max-md:w-full"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">{bill.companyName}</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-semibold">GST No:</span> {bill.GSTNo}</p>
            <p><span className="font-semibold">PAN:</span> {bill.PAN}</p>
            <p><span className="font-semibold">PO No:</span> {bill.PoNo}</p>
            <p><span className="font-semibold">Total Amount:</span> ₹{bill.totalAmount}</p>
            <p><span className="font-semibold">Invoice Date:</span> {new Date(bill.invoiceDate).toLocaleDateString()}</p>
          </div>
          <div className='flex w-full h-8 gap-2'>
              <button className='grow size-full bg-amber-500 rounded-sm' onClick={()=>{
                handelUpateBills(bill)
              }}>Update</button>
              <button className='grow size-full bg-red-500 rounded-sm' onClick={() => {handelDeleteBills(bill._id)}}>Delete</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Home