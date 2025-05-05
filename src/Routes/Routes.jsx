import React from 'react';

import{
    createBrowserRouter,
    RouterProvider,
}from "react-router";
import MainLayout from '../layouts/MainLayout';

const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
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

])

export default routes;