import React, { useState } from 'react'
import { validatePassword } from 'val-pass';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import toast from 'react-hot-toast';
const Login = () => {
   const [formData,setFormData]=useState({
    email:'',
    password:''
  });
  
  let handelChange=(e)=>{
    let {name,value}=e.target
    setFormData((prev)=>({...prev,[name]:value}))
  }

let handelSubmit=(e)=>{
  e.preventDefault()
   let {email,password}=formData
    if(!email||!password){
      toast.error("All feilds are mandatory")
      return
    }
}

  return (
    <div className='flex items-center justify-center bg-gray-300 size-full'>
          <form action="" className='bg-white flex flex-col justify-center px-10 items-center w-1/2 h-2/4 gap-8 rounded-lg 
          drop-shadow-lg max-sm:w-[90%] max-sm:h-[60%] overflow-hidden' onSubmit={handelSubmit}>
            <div className='w-full flex items-center justify-center font-bold  '>
              <h1 className='text-3xl max-sm:text-[25px]'>Login Form</h1>
            </div>
            <div className='border-2 w-full flex items-center justify-center rounded-sm'>
              <input type="email" placeholder='Enter Email' name='email' className='outline-none px-3 w-full'  onChange={handelChange}/>
              <span className='pr-1.5'><MdEmail /></span>
            </div>
            <div className='border-2 w-full flex items-center justify-center rounded-sm'>
              <input type="password" placeholder='Enter Password' name='password' className='outline-none px-3 w-full' onChange={handelChange}/>
              <span className='pr-1.5'><RiLockPasswordFill /></span>
            </div>
           
            <div className='border-2 w-full flex items-center justify-center bg-black hover:bg-[#555] active:bg-blue-600 active:scale-[0.9]'>
              <button className='text-white w-full tracking-widest'>Click</button>
            </div>
          </form>
        </div>
  )
}

export default Login