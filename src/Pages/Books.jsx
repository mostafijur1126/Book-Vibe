import React, { use } from 'react';
import { Link } from 'react-router';

const bookPromice = fetch("/booksData.json").then((res) => res.json());

const Books = () => {
    const books = use(bookPromice);

    return (
        <div className='w-full bg-gradient-to-br from-gray-50 to-blue-50/30 py-12 md:py-16 lg:py-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                
                {/* Header Section */}
                <div className='text-center mb-12 md:mb-16'>
                    <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-blue-700">Our Collection</span>
                    </div>
                    <h1 className='text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
                        Explore Our <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Books</span>
                    </h1>
                    <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                        Discover your next favorite read from our curated collection of best-selling books
                    </p>
                </div>

                {/* Books Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {books.map((book) => (
                        <Link 
                            to={`/bookDetails/${book.bookId}`} 
                            key={book.bookId} 
                            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Badge for New/Featured (Optional) */}
                            {book.bookId <= 3 && (
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        Featured
                                    </div>
                                </div>
                            )}
                            
                            {/* Image Section */}
                            <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-8 pt-10">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                                <img
                                    className='h-48 md:h-56 lg:h-64 w-full object-contain transform group-hover:scale-110 transition-transform duration-500'
                                    src={book.image}
                                    alt={book.bookName}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x400?text=Book+Cover';
                                    }}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-5 md:p-6">
                                {/* Tags */}
                                <div className='flex flex-wrap gap-2 mb-3'>
                                    {book.tags.slice(0, 3).map((tag, ind) => (
                                        <div key={ind} className="badge bg-blue-50 text-blue-700 border-none px-3 py-1 text-xs font-medium rounded-full">
                                            #{tag}
                                        </div>
                                    ))}
                                    {book.tags.length > 3 && (
                                        <div className="badge bg-gray-100 text-gray-600 border-none px-3 py-1 text-xs font-medium rounded-full">
                                            +{book.tags.length - 3}
                                        </div>
                                    )}
                                </div>

                                {/* Book Title */}
                                <h2 className="card-title text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {book.bookName}
                                </h2>

                                {/* Author */}
                                <p className="text-gray-600 text-sm md:text-base mb-4 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    By {book.author}
                                </p>

                                {/* Footer with Category and Rating */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    {/* Category */}
                                    <div className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
                                        </svg>
                                        <span className="text-sm text-gray-600 font-medium">{book.category}</span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <span className="ml-1 text-sm font-semibold text-gray-700">{book.rating}</span>
                                        </div>
                                        <span className="text-xs text-gray-400">/5.0</span>
                                    </div>
                                </div>

                                {/* View Details Link */}
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                                        View Details
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More Button (Optional) */}
                <div className="text-center mt-12 md:mt-16">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        Load More Books
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Books;