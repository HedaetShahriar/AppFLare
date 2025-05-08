import React, { use } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {registerUser, setUser, updateUserProfile,googleSignIn} = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);
        registerUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUserProfile(name, photoURL)
                    .then(() => {
                        console.log("User profile updated successfully");
                        setUser(user);
                    })
                    .catch((error) => {
                        console.error("Error updating user profile", error.message);
                    });
            })
            .catch((error) => {
                console.error(error.message);
            });

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                console.error("Google sign-in error", error.message);
            });
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mt-14'>
                <div className='flex flex-col  bg-base-200 border-base-300 rounded-box w-md border p-4 md:p-6'>

                    <h1 className='text-3xl font-bold text-center'>Welcome!</h1>
                    <p className='text-center'>Please Register to your account</p>
                    <form onSubmit={handleRegister} className='flex flex-col mt-4 gap-1'>
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full focus:outline-none" placeholder="Enter your Name" required/>
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full focus:outline-none" placeholder="Enter your Email" required/>
                        <label className="label">photoURL</label>
                        <input name='photoURL' type="text" className="input w-full focus:outline-none" placeholder="Enter your photoURL" required/>
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full focus:outline-none" placeholder="Enter your Password" required/>
                        <button type='submit' className='btn btn-neutral mt-2'>Register</button>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mb-3">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='text-center'>Already have an account? <Link to="/auth/login" className='text-[#5dba76] font-semibold'>logIn</Link></p>
                </div>
               
            </div>
        </div>
    );
};

export default Register;