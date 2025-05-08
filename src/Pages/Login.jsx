import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signInUser,googleSignIn,setUser}=use(AuthContext);
    // console.log(location);
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                navigate(`${location.state? location.state : '/'}`);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
    const handleGoogleLogin = () => {
        googleSignIn().then((result) => {
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
            console.error(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mt-14'>
                <div className='flex flex-col  bg-base-200 border-base-300 rounded-box w-md border p-4 md:p-6'>

                    <h1 className='text-3xl font-bold text-center'>Welcome Back!</h1>
                    <p className='text-center'>Please login to your account</p>
                    <form onSubmit={handleForm} className='flex flex-col mt-4 gap-2'>
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full focus:outline-none" placeholder="Enter your Email" required/>

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full focus:outline-none" placeholder="Enter your Password" required/>
                        <Link to="/auth/Login/forgotPassword" className='text-[#171a18] font-semibold'>Forgot Password?</Link>
                        <button type='submit' className='btn btn-neutral mt-2' >Login</button>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mb-3">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='text-center'>Don't have an account? <Link to="/auth/register" className='text-[#5dba76] font-semibold'>Register</Link></p>
                </div>
                {/* <form className=" flex flex-col  bg-base-200 border-base-300 rounded-box w-md border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </form> */}
            </div>
        </div>
    );
};

export default Login;