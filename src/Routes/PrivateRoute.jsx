import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading ';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.state);

    if(loading){
        return <Loading></Loading>;
    }
    
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/Login"/>;
};

export default PrivateRoute;