import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const NavLinks = (
        <>
            <li>
                <NavLink 
                    to={"/"} 
                    className={({ isActive }) => 
                        `font-semibold transition-all duration-300 px-4 py-2 rounded-lg flex items-center gap-2 ${
                            isActive 
                                ? "text-blue-600 bg-blue-50 shadow-sm" 
                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`
                    } 
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/listedBooks"} 
                    className={({ isActive }) => 
                        `font-semibold transition-all duration-300 px-4 py-2 rounded-lg flex items-center gap-2 ${
                            isActive 
                                ? "text-blue-600 bg-blue-50 shadow-sm" 
                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    Listed Books
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/page-to-read"} 
                    className={({ isActive }) => 
                        `font-semibold transition-all duration-300 px-4 py-2 rounded-lg flex items-center gap-2 ${
                            isActive 
                                ? "text-blue-600 bg-blue-50 shadow-sm" 
                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    Pages to Read
                </NavLink>
            </li>
        </>
    );

    return (
        <div className='w-full bg-white shadow-lg sticky top-0 z-50'>
            <div className="max-w-7xl px-4 md:px-6 mx-auto">
                <div className="navbar py-3 md:py-4">
                    {/* Logo and Mobile Menu */}
                    <div className="navbar-start">
                        {/* Mobile Menu Button */}
                        <div className="dropdown">
                            <div 
                                tabIndex={0} 
                                role="button" 
                                className="btn btn-ghost lg:hidden text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            {isMobileMenuOpen && (
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-white rounded-xl z-20 mt-3 w-64 p-3 shadow-xl border border-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {NavLinks}
                                </ul>
                            )}
                        </div>
                        
                        {/* Logo */}
                        <a className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Book Vibe
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2">
                            {NavLinks}
                        </ul>
                    </div>

                    {/* Auth Buttons */}
                    <div className="navbar-end gap-3 md:gap-4">
                        <button className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                Sign In
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        <button className="group relative px-5 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                </svg>
                                Sign Up
                            </span>
                            <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Navbar;