import React from 'react';
import bannerimg from '../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div className='w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden relative'>
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="hero max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative z-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 xl:gap-16">
                    
                    {/* Image Section */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                        <div className="relative transform transition-transform duration-500 group-hover:scale-105">
                            <img
                                src={bannerimg}
                                alt="Books Banner"
                                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                                New Arrivals
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='space-y-6 md:space-y-8 text-center lg:text-left'>
                        {/* Small Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mx-auto lg:mx-0">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-gray-700">Welcome to BookVerse</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Books to freshen up
                            </span>
                            <br />
                            <span className="text-gray-800">your bookshelf</span>
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Discover thousands of books from best-selling authors. 
                            Find your next favorite read today!
                        </p>

                        {/* Stats Section */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-4">
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-blue-600">10K+</p>
                                <p className="text-sm text-gray-500">Happy Readers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-indigo-600">5K+</p>
                                <p className="text-sm text-gray-500">Books Available</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-purple-600">500+</p>
                                <p className="text-sm text-gray-500">Authors</p>
                            </div>
                        </div>

                        {/* Button Group */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    View The List
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            
                            <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 hover:border-blue-300 group">
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    Browse Categories
                                </span>
                            </button>
                        </div>

                        {/* Trust Badge */}
                        <div className="flex items-center gap-2 justify-center lg:justify-start pt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">
                                Trusted by <span className="font-semibold text-gray-700">1000+</span> book lovers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;