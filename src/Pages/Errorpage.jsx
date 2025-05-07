import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="text-center mt-12 font-sans">
                <h1 className="text-6xl text-red-500">404</h1>
                <p className="text-lg text-gray-500">The page you are looking for does not exist.</p>
                <p className="text-lg text-gray-500">Please check the URL or go back to the homepage.</p>
                <Link to="/" className="btn btn-neutral mt-4">Go to Homepage</Link>
            </div>
        </>
    );
};

export default Errorpage;