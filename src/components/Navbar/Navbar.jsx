import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();
    // console.log(user);
    const links = <>
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
            }
        >
            Apps
        </NavLink></li>
        <li><NavLink to="/Profile"
            className={({ isActive }) =>
                (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
            }
        >
            MyProfile
        </NavLink></li>
        {!user && (
            <>
                <li><NavLink to="/auth/login"
                    className={({ isActive }) =>
                        (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
                    }
                >
                    LogIn
                </NavLink></li>
                <li><NavLink to="/auth/register"
                    className={({ isActive }) =>
                        (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
                    }
                >
                    Register
                </NavLink></li>
            </>
        )}
    </>;
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.       
                console.error("Logout error", error.message);
            });
    }
    const handleLogin = () => {
        navigate("/auth/login");
    }


    return (
        <div className="navbar shadow-2xs">
            <div className='container flex justify-between mx-auto items-center py-3 '>
                <div className="flex items-center justify-center gap-1.5">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mt-1">
                            <RiMenu2Fill size={30} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 py-2 shadow text-lg font-medium">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-10 h-10 hidden mt-2 lg:block' src={logo} alt="" />
                        <h1 className='font-bold text-3xl'>AppFLare</h1>
                    </div>
                </div>
                <div className=" hidden lg:flex">
                    <ul className='flex gap-1 text-lg font-medium'>
                        {
                            links
                        }
                    </ul>
                </div>
                <div className=" flex items-center gap-1.5">
                    {
                        user ? (
                            <>
                                {user.photoURL ? (<img title={user.displayName} onClick={() => navigate('/Profile')} className='w-10 h-10 rounded-full p-0.5 border-1 hover:cursor-pointer border-gray-400' src={user.photoURL} alt="User" />) : (<img className="w-10 h-10 rounded-full p-0.5 border-1 hover:cursor-pointer border-gray-400" src={logo} alt="User" />)}
                                <button onClick={handleLogOut} className='btn btn-active rounded-full py-[20px] px-[25px] text-xl font-semibold'>Logout</button>
                            </>
                        ) : (
                            <button onClick={handleLogin} className='btn btn-active rounded-full py-[20px] px-[25px] text-xl font-semibold'>Login</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;