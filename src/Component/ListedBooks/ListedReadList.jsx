import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Link } from 'react-router';

const ListedReadList = ({ shortingType }) => {
    const { storedBooks } = useContext(BookContext);
    const [filteredReadlist, setFilteredReadlist] = useState(storedBooks);

    useEffect(() => {
        if (shortingType) {
            if (shortingType === "pages") {
                const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
                setFilteredReadlist(sortedData);
            } else if (shortingType === "reating") {
                const sortedData = [...storedBooks].sort((a, b) => b.rating - a.rating); // Fixed: High to low
                setFilteredReadlist(sortedData);
            }
        } else {
            setFilteredReadlist(storedBooks);
        }
    }, [shortingType, storedBooks]);

    if (!filteredReadlist || filteredReadlist.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <div className="w-32 h-32 mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">No Books in Read List</h2>
                <p className="text-gray-500 mb-6">You haven't added any books to your read list yet.</p>
                <Link to="/books" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all">
                    Browse Books
                </Link>
            </div>
        );
    }

    return (
        <div>
            {/* Results Count */}
            <div className="mb-6 pb-4 border-b border-gray-200">
                <p className="text-gray-600">
                    Showing <span className="font-semibold text-blue-600">{filteredReadlist.length}</span> books 
                    {shortingType && (
                        <span className="text-gray-500">
                            {" "}sorted by {shortingType === "pages" ? "Pages" : "Rating"}
                        </span>
                    )}
                </p>
            </div>

            {/* Books Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredReadlist.map((book, ind) => (
                    <Link 
                        key={ind} 
                        to={`/bookDetails/${book.bookId}`}
                        className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                    >
                        {/* Progress Badge */}
                        <div className="absolute top-4 right-4 z-10">
                            <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Read
                            </div>
                        </div>

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
                                {book.tags && book.tags.slice(0, 3).map((tag, idx) => (
                                    <div key={idx} className="badge bg-blue-50 text-blue-700 border-none px-3 py-1 text-xs font-medium rounded-full">
                                        #{tag}
                                    </div>
                                ))}
                                {book.tags && book.tags.length > 3 && (
                                    <div className="badge bg-gray-100 text-gray-600 border-none px-3 py-1 text-xs font-medium rounded-full">
                                        +{book.tags.length - 3}
                                    </div>
                                )}
                            </div>

                            {/* Book Title */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                {book.bookName}
                            </h2>

                            {/* Author */}
                            <p className="text-gray-600 text-sm md:text-base mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                {book.author}
                            </p>

                            {/* Book Details Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                {/* Pages */}
                                <div className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                    <span className="text-gray-600">{book.totalPages} pages</span>
                                </div>

                                {/* Publisher */}
                                <div className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                    <span className="text-gray-600 truncate">{book.publisher}</span>
                                </div>
                            </div>

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

            {/* Reading Stats Summary (Optional) */}
            {filteredReadlist.length > 0 && (
                <div className="mt-10 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Pages Read</p>
                                <p className="text-xl font-bold text-gray-800">
                                    {filteredReadlist.reduce((total, book) => total + (book.totalPages || 0), 0).toLocaleString()} pages
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Average Rating</p>
                                <p className="text-xl font-bold text-gray-800">
                                    {(filteredReadlist.reduce((total, book) => total + (book.rating || 0), 0) / filteredReadlist.length).toFixed(1)} / 5.0
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListedReadList;