import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import Loader from '../Components/Loader';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const{user,loading}=useAuth()
    const{isAdmin,adminLoading}=useAdmin()

   
  
    if(loading || adminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
     return children
    }

    return <Navigate to={'/'} ></Navigate>
};

export default AdminRoute;