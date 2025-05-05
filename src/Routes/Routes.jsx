import React from 'react';

import{
    createBrowserRouter,
}from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/Profile",
                element: <h1>Profile</h1>
            },
        ]
    },
    {
        path: "/about",
        element: <h1>About</h1>
    },
    {
        path:"/auth/Login",
        element: <Login></Login>
    },
    {
        path:"/auth/Register",
        element: <Register></Register>
    }

])

export default routes;