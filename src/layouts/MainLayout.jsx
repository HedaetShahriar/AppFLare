import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
// import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <>
            {/* <ToastContainer></ToastContainer> */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-315px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;