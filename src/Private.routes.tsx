import { DataContext } from 'context/DataContext';
import React,{useContext} from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}:{children:React.ReactNode}):any => {
    const {userInfo}=useContext(DataContext)
    if(userInfo){
        return children
    }
    return <Navigate to='/authentication/sign-in/cover'  replace/>
};

export default PrivateRoute;