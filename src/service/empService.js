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
    }
}

export default empServices;