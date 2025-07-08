import React, { useContext, useState } from 'react'
import Items from '../../../bill/Items'
import empServices from '../../../../service/empService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { contextApi } from '../../../context/Context'

const AddBills = () => {
  const [bill,setBill]=useState({
    companyName:"",
    PoNo:"",
    invoiceDate:new Date().toISOString().split("T")[0],
    workCompletionDate:"",
    address:"",
    PAN:"",
    GSTNo:"",
    clientBankName:""
  })

  const navigate=useNavigate()
   const {globalState}=useContext(contextApi)

  const [items,setItems]=useState([])

  const handelChange=(e)=>{
    let {name,value}=e.target
    setBill((preVal)=>({...preVal,[name]:value}))
  }

  const handelClick=()=>{
    let newObj={
      id:Date.now(),
        description:"",
        quantity:"",
        rate:"",
        amount:"",
        cgstPercent:"",
        sgstPercent:""
    }
    setItems((preval)=>([...preval,newObj]))
  }
  
 

 const handelSubmit=(e)=>{
    e.preventDefault()
    // console.log(bill);
    // console.log(items);
    let {companyName,workCompletionDate,PoNo,address,PAN,GSTNo,clientBankName}=bill
    let totalAmount=items.reduce((acc,val)=>{
      const base=parseInt(val.amount)
      const cgst=base*parseInt(val.cgstPercent)/100
      const sgst=base*parseInt(val.sgstPercent)/100

      // console.log(base,cgst,sgst,acc);
      
      return acc+base+cgst+sgst
    },0)
    let payload={
      companyName,
      workCompletionDate,
      PoNo,
      address,
      PAN,
      GSTNo,
      clientBankName,
       invoiceDate:new Date().toISOString().split("T")[0],
      items,
      totalAmount
    }
    console.log(payload);
    
    (async()=>{
      try {
        let data=await empServices.addBills(payload,globalState.token)
        if(data.status==201){
          toast.success("bills added successfully")
          navigate("/home")
        } else {
          toast.error("someting went wrong")
        }
      } catch (error) {
          toast.error("someting went wrong")
      }
    })();
  }

  // console.log(new Date().toISOString().split("T")[0]);
  
  const removeElement=(id)=>{
setItems(items.filter((val)=>val.id!=id))
  }

  
const updateElements = (id, name, value) => {
  setItems((prevItems) =>
    prevItems.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          [name]: value
        };

        const rate = parseFloat(updatedItem.rate) || 0;
        const quantity = parseFloat(updatedItem.quantity) || 0;
        updatedItem.amount = rate * quantity;

        return updatedItem;
      }
      return item;
    })
  );
};


  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center'>
          <form action="" className='w-1/2 h-[90%]  rounded-3xl bg-white shadow-2xl flex  items-center flex-col gap-8 px-[80px] py-20 max-sm:w-[90%] overflow-scroll' onSubmit={handelSubmit}>
            <div className='font-bold w-full flex justify-center items-center'>
              <h1 className='text-3xl max-lg:text-sm'>Add Bills</h1>
            </div>
    
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="name" placeholder='Enter Name' className='w-full outline-none px-4 h-10'  onChange={handelChange}/>
            
            </div>
    
             <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="companyName" placeholder='Enter Company Name' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
                        </div>
    
    
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="PoNo" placeholder='Enter PoNo' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
       
            </div>
    
    


               
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="date" name="workCompletionDate" placeholder='Enter Work Completion Date' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
        
            </div>


                           
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="address" placeholder='Enter Address' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
        
            </div>


                                     
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="PAN" placeholder='Enter PAN' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
        
            </div>


                                     
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="GSTNo" placeholder='Enter GST No' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
        
            </div>


                                     
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
              <input type="text" name="clientBankName" placeholder='Enter Client Bank Name' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
        
            </div>
    
             {
              items.map((val)=><Items key={val.id}
               removeElement={removeElement}
               val={val} updateElements={updateElements}>
                
               </Items>)
            }
            
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]'>
             <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0' type='button'  onClick={handelClick}>Click here to add items</button>
            </div>

           
            
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]'>
             <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0'>Click</button>
            </div>
          </form>
        </div>
  )
}

export default AddBills