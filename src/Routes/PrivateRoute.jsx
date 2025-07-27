
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

import Loader from '../Components/Loader';

const PrivateRoute = ({children}) => {
 
    const {user,loading}=useAuth()
    const location=useLocation()
     if(loading){
       return  <Loader></Loader>
    }
    if(user){
      return  children
    }
   
   

    return <Navigate to={'/login'} state={location.pathname} ></Navigate>
};

export default PrivateRoute;