import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegWindowClose } from "react-icons/fa";

const NavBar = () => {
     const [show,setShow]=useState(false)

    const handelShow=()=>{
        setShow(!show)
    }
  return (
    <div className={`w-full h-[80px] bg-black text-amber-50 flex justify-around items-center text-xl max-sm:justify-start max-sm:px-8 ${show?'h-[210px] flex flex-col justify-around gap-2.5 items-start py-2.5':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>
         <div className='hidden max-sm:flex'>

            {
                show?<FaRegWindowClose onClick={handelShow}/>: <TfiMenuAlt onClick={handelShow}/>
            }
           
        </div>
        
        <div className={`max-sm:hidden${show?'block':""}`}>
            <Link to="/home">Home</Link>
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <Link to="addBills">Add Bills</Link>
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <Link to="filterBills">Filter Bills</Link>
        </div>
        <div className={`max-sm:hidden${show?'block':""}`}>
            <Link to="about">About</Link>
        </div>
    </div>
  )
}

export default NavBar