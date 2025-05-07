import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router';

const ForgotPassword = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mt-14'>
                <div className='flex flex-col  bg-base-200 border-base-300 rounded-box w-md border p-4 md:p-6'>

                    <h1 className='text-2xl font-semibold text-center'>Reset password!</h1>
                    <form onSubmit={handleForm} className='flex flex-col mt-4 gap-2'>
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full focus:outline-none" placeholder="Enter your Email" required/>

                        <label className="label">New Password</label>
                        <input name="password" type="password" className="input w-full focus:outline-none" placeholder="Enter your new Password" required/>
                        <button type='submit' className='btn btn-neutral mt-2' >Reset</button>
                    </form>
                    
                    <p className='text-center'><Link to='/auth/login' className='text-[#5dba76] font-semibold'>Back</Link></p>
                </div>
               
            </div>
        </div>
    );
};

export default ForgotPassword;