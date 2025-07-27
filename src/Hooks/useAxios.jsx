import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:'https://final-project-ece51.web.app'
})

const useAxios = () => {  
    const {logOut}=useAuth()
    const navigate=useNavigate()

    axiosSecure.interceptors.request.use((config)=>{
        const token=localStorage.getItem('Access-Token')
        config.headers.Authorization=`Bearer ${token}`
        return config

    },(err)=>{
         return Promise.reject(err);
    })

    axiosSecure.interceptors.response.use((res)=>{
      
        return res
    }, async(err)=>{

      if(err.response.status === 401 ||err.response.status===403){
        await logOut()
        navigate('/login')
       
      }
     return Promise.reject(err);
    })

    return axiosSecure
};

export default useAxios;