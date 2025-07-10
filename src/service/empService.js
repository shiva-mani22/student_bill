import axios from "axios"
import axiosInstance from "../components/AxiosInstance/Instance";

let empServices={
    regiUser: async(payload)=>{
        try {
            let data=axiosInstance.post("/register",payload)
            console.log(data);
            
            return data
        } catch (error) {
            return error
        }
    },
    loginUser: async(payload)=>{
        try {
            let data=axiosInstance.post("/login",payload)
            console.log(data);
            
            return data
        } catch (error) {
            return error
        }
    },
    addBills: async(payload,token)=>{
        console.log(payload);
        try {
            let data=await axiosInstance.post("/add-bill",payload,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            return data
        } catch (error) {
            return error
        }
        
    },
    allBills: async(token)=>{
        try {
            let data=await axiosInstance.get("/get-bill-by-user",{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            return data;
        } catch (error) {
            return error
        }
    },
     updateBills:async (payload,token,id)=>{
        console.log(payload);
        
        try {
            let data=await axiosInstance.put(`/update-bill/${id}`,payload,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })

            // console.log(data);
            return data
            
        } catch (error) {
            // console.log(error);
            return error
        }
    },
    deleteBills:async(token,id)=>{
       try {
            let data=await axiosInstance.delete(`/delete-bill/${id}`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })

            return data
            
        } catch (error) {
            return error
        }
    }
}

export default empServices;