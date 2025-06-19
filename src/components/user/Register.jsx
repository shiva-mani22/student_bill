import React from 'react'
import { BiRename } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoRepeat } from "react-icons/io5";
const Register = () => {
  return (
    <div className='flex items-center justify-center m-5 bg-gray-300 size-full rounded-md'>
      <form action="" className='bg-white flex flex-col justify-center px-10 items-center w-1/2 h-120 gap-6 drop-shadow-lg'>
        <div className='w-full flex items-center justify-center font-bold '>
          <h1>Registration Form</h1>
          </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="text" placeholder='Enter Name' className='outline-none px-3 w-full'/>
          <span><BiRename /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="text" placeholder='Enter User Name' className='outline-none px-3 w-full'/>
          <span><FaRegUserCircle /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="email" placeholder='Enter Email' className='outline-none px-3 w-full'/>
          <span><MdEmail /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="password" placeholder='Enter Password' className='outline-none px-3 w-full'/>
          <span><RiLockPasswordFill /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center rounded-sm'>
          <input type="password" placeholder='Re-Enter Password' className='outline-none px-3 w-full'/>
          <span><IoRepeat /></span>
        </div>
        <div className='border-2 w-full flex items-center justify-center bg-black'>
          <button className='text-white w-full'>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register