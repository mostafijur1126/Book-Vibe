import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const NavLinks =(
        <>
            <li><NavLink to={"/"} className={({isActive})=> `font-semibold ${isActive ? "text-green-500 border border-green-500" : ""}`} >Home</NavLink></li>
            <li><NavLink to={"/books"} className={({isActive})=> `font-semibold ${isActive ? "text-green-500 border border-green-500" : ""}`}>Listed Books</NavLink></li>
            <li><NavLink to={"/page-to-read"} className={({isActive})=> `font-semibold ${isActive ? "text-green-500 border border-green-500" : ""}`}>Pages to Read</NavLink></li>
        </>
    )
    return (
        <div className='w-full bg-gray-800  sticky top-0 z-50 shadow'>
            <div className=" max-w-7xl px-4 md:px-6 mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold text-white">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6 lg:gap-8 text-white">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <a className="btn bg-blue-600 text-white hover:bg-blue-700 border-none">Sign In</a>
                    <a className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 border-none">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;