import React from 'react'
import { useLocation,Navigate} from 'react-router-dom';
import { useAuth } from '../Context/auth-context'

export const RequiresAuth = ({children}) => {
    const location=useLocation();
    const {userData}=useAuth();

  return (
    userData? children:<Navigate  to="/login" replace state={{from:location}}/>
    
  )
}
