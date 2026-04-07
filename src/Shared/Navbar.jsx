import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `px-4 py-2 rounded-lg font-medium transition ${
            isActive
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
        }`;

    const NavLinks = (
        <>
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
                Home
            </NavLink>
            <NavLink to="/listedBooks" className={linkClass} onClick={() => setIsOpen(false)}>
                Listed Books
            </NavLink>
            <NavLink to="/page-to-read" className={linkClass} onClick={() => setIsOpen(false)}>
                Pages to Read
            </NavLink>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-blue-600">
                        Book Vibe
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-4">
                        {NavLinks}
                    </div>

                    {/* Right Buttons */}
                    <div className="hidden lg:flex gap-3">
                        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                            Sign In
                        </button>
                        <button className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md border-t">
                    <div className="flex flex-col p-4 gap-2">
                        {NavLinks}

                        <hr />

                        <button className="w-full py-2 rounded-lg bg-blue-600 text-white">
                            Sign In
                        </button>
                        <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;