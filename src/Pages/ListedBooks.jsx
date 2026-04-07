import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../index.css'
import ListedReadList from '../Component/ListedBooks/ListedReadList';
import ListedWishlist from '../Component/ListedBooks/ListedWishlist';

const ListedBooks = () => {
    const [shortingType, setShortingType] = useState("");

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-8 md:py-12 lg:py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                {/* Header Section */}
                <div className='text-center mb-8 md:mb-12'>
                    <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-blue-700">My Library</span>
                    </div>
                    <h1 className='text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        My <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Listed Books</span>
                    </h1>
                    <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
                        Manage your reading journey - track what you've read and what you want to read next
                    </p>
                </div>

                {/* Sort Dropdown - Centered & Styled */}
                <div className='flex justify-end mb-6 md:mb-8'>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 rounded-xl shadow-sm gap-2"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                            </svg>
                            <span className="font-semibold">
                                Sort by: <span className="text-blue-600">{shortingType || "Default"}</span>
                            </span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="dropdown-content menu bg-white rounded-xl z-20 w-56 p-2 shadow-xl border border-gray-100 mt-2"
                        >
                            <li onClick={() => setShortingType("")} className="mb-1">
                                <a className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                    Default
                                </a>
                            </li>
                            <li onClick={() => setShortingType("pages")} className="mb-1">
                                <a className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                    Pages (Low to High)
                                </a>
                            </li>
                            <li onClick={() => setShortingType("reating")}>
                                <a className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                    </svg>
                                    Rating (High to Low)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tabs Section - Custom Styling */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <Tabs>
                        <TabList className="flex border-b border-gray-200 bg-gray-50/50 p-1 gap-1">
                            <Tab
                                className="flex-1 cursor-pointer py-3 px-4 text-center font-semibold transition-all duration-300 rounded-lg focus:outline-none"
                                selectedClassName="text-blue-600 bg-white shadow-sm"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                    Read Books
                                </div>
                            </Tab>
                            <Tab
                                className="flex-1 cursor-pointer py-3 px-4 text-center font-semibold transition-all duration-300 rounded-lg text-gray-600 hover:text-gray-800 focus:outline-none"
                                selectedClassName="text-blue-600 bg-white shadow-sm"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                    Wishlist Books
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className="p-4 md:p-6 lg:p-8">
                                <ListedReadList shortingType={shortingType} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="p-4 md:p-6 lg:p-8">
                                <ListedWishlist shortingType={shortingType} />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>

                {/* Empty State Suggestion (Optional) */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                        💡 Tip: Sort your books by pages or rating to find what you're looking for faster
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;