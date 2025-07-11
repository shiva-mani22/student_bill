import React, { useState , useContext } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import empServices from '../../service/empService';
import { contextApi } from '../context/Context';
const Login = () => {
   const [formData,setFormData]=useState({
    email:'',
    password:''
  });


  const navigate=useNavigate()


  let handelChange=(e)=>{
    let {name,value}=e.target
    setFormData((prev)=>({...prev,[name]:value}))
  }

const {globalState, setGlobalState } = useContext(contextApi);

const handelSubmit=e=>{
    e.preventDefault()
    let {password,email}=formData
    if(!password||!email){
      toast.error("All feilds are mandatory")
      return
    }
    
    // console.log(formData);
    
(async()=>{
let data=await empServices.loginUser(formData)
// console.log(data);

try {
  if(data.status==200){
  toast.success("Login successfully")

  setGlobalState((preVal)=>({...preVal,token:data.data.token}))
  
  
  navigate("/home")
}else{
  toast.error(`${data.response.data.message}`)
}
} catch (error) {
  toast.error("Something went wrong")
}
})()
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

            <div className='hover:underline hover:text-blue-600'>
          <Link to="register">Click here for Register</Link>
        </div>

          </form>
        </div>
  )
}

export default Login