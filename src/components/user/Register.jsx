import React, { useState } from 'react'
import { BiRename } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoRepeat } from "react-icons/io5";
import {validatePassword} from "val-pass"
import toast from "react-hot-toast"
import empServices from '../../service/empService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
const navigate=useNavigate()

  const [formData,setFormData]=useState({
  name:'',
  userName:'',
  email:'',
  password:''
});

const [matched,setMatched]=useState(true)

const [errorMessage,setErrorMessage]=useState("")

let handelChange=(e)=>{
  let {name,value}=e.target
  setFormData((prev)=>({...prev,[name]:value}))
  if(name=="password"){
    let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
  validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage())
  value==""&&setErrorMessage("")}
}
let handelSubmit=(e)=>{
  e.preventDefault()
   let {name,userName,email,password}=formData
    if(!name||!userName||!email||!password){
      toast.error("All feilds are mandatory")
      return
    }
     let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
    if(!validateAll()){
      toast.error(`${getAllValidationErrorMessage()}`)
    }
    if(!matched){
      toast.error("passsword and confirm password did not match")
     return
    };
   
    
    (async()=>{
      let data=await empServices.regiUser(formData)
      console.log(data);
      
      try {
        if(data.status==201){
          toast.success("registered succesfully")
          navigate("/login")
        }
        else {
        toast.error("something went wrong")
        }
      } catch (error) {
        toast.error("something went wrong")
      }
    }
  )()
  // console.log(formData);
  
}

const handelCheckPassword=(e)=>{
  let {value}=e.target
  formData.password!=value?setMatched(false):setMatched(true)
  value=="" && setMatched(true)


}
  return (
    <div className='flex items-center justify-center bg-gray-300 size-full'>
      <form action="" className='bg-white flex flex-col justify-center px-10 items-center w-1/2 h-3/4 gap-8 rounded-lg 
      drop-shadow-lg max-sm:w-[90%] overflow-hidden' onSubmit={handelSubmit}>
        <div className='w-full flex items-center justify-center font-bold  '>
          <h1 className='text-3xl max-sm:text-[25px]'>Registration Form</h1>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="text" placeholder='Enter Name' name='name' className='outline-none px-3 w-full'  onChange={handelChange}/>
          <span className='pr-1.5'><BiRename /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="text" placeholder='Enter User Name' name='userName' className='outline-none px-3 w-full' onChange={handelChange}/>
          <span className='pr-1.5'><FaRegUserCircle /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="email" placeholder='Enter Email' name='email' className='outline-none px-3 w-full'  onChange={handelChange}/>
          <span className='pr-1.5'><MdEmail /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="password" placeholder='Enter Password' name='password' className='outline-none px-3 w-full' onChange={handelChange}/>
          <span className='pr-1.5'><RiLockPasswordFill /></span>
        </div>
        <div className={errorMessage?'w-full flex justify-center items-center px-2':'hidden'}>
          <span className='text-red-700'>*{errorMessage}</span>
        </div>
        <div className={`border-2 w-full flex items-center justify-center rounded-sm ${matched?'border-black':'border-red-700'}` }>
          <input type="password" placeholder='Re-Enter Password' className='outline-none px-3 w-full' onChange={handelCheckPassword}/>
          <span className='pr-1.5'><IoRepeat /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center bg-black  hover:bg-[#555] active:bg-blue-600 active:scale-[0.9]'>
          <button className='text-white w-full tracking-widest'>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register