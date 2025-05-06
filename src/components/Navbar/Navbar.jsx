import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';

const Navbar = () => {
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
                        <img className='w-10 h-10 hidden mt-2 lg:block' src= {logo}alt="" />
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
                    <img className='h-10 w-10 rounded-full border-2 p-0.5 ' src={logo} alt="" />
                    <button className='btn btn-active rounded-full py-[20px] px-[25px]  text-xl font-semibold'>Login</button>
                    <button className='btn btn-active rounded-full py-[20px] px-[25px]  text-xl font-semibold'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;