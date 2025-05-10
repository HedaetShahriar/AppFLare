import React from 'react';

import{
    createBrowserRouter,
}from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Loading from '../components/Loading/Loading ';
import PrivateRoute from './PrivateRoute';
import AppDetails from '../Pages/AppDetails';
import UserProfile from '../Pages/UserProfile';
import ForgotPassword from '../Pages/ForgotPassword';
import Errorpage from '../Pages/Errorpage';
import About from '../Pages/About';

const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                hydrateFallbackElement:<Loading></Loading>,
                loader:()=>fetch("/apps.json"),
            },
            {
                path:"/Profile",
                element: <PrivateRoute>
                    <UserProfile></UserProfile>
                </PrivateRoute>,
            },
            {
                path:"/Apps/:id",
                element:<PrivateRoute>
                    <AppDetails></AppDetails>
                </PrivateRoute>,
                hydrateFallbackElement:<Loading></Loading>,
                loader: () => fetch(`/apps.json`),

            },
            {
                path: "/about",
                element: <About></About>,
            },
        ]
    },
    {
        path:"/auth/Login",
        element: <Login></Login>
    },
    {
        path:"/auth/Register",
        element: <Register></Register>
    },
    {
        path: "/auth/Login/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>,
    }
])

export default routes;