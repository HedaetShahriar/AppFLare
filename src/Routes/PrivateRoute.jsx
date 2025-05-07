import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import Loading from '../components/Loading/Loading ';

const PrivateRoute = ({children}) => {
    const navigate=useNavigate();
    const {user,loading}=use(AuthContext);

    if(loading){
        return <Loading></Loading>;
    }
    
    if(user){
        return children;
    }
    return navigate("/auth/login");
};

export default PrivateRoute;