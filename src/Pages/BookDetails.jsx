import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../Context/BookProvider';

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const expectBooks = books.find(book => book.bookId == bookId);

    if (!expectBooks) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-700">Book not found</h2>
                    <p className="text-gray-500 mt-2">The book you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }
    const {hendelReadBook,hendelWishlistBook} = useContext(BookContext);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Back Button */}
                <button 
                    onClick={() => window.history.back()}
                    className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Books
                </button>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 lg:p-10">
                        
                        {/* Book Image Section */}
                        <div className="lg:w-2/5">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <figure className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                                    <img 
                                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                                        src={expectBooks.image} 
                                        alt={expectBooks.bookName}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x500?text=Book+Cover';
                                        }}
                                    />
                                </figure>
                            </div>
                        </div>

                        {/* Book Details Section */}
                        <div className="lg:w-3/5 flex flex-col">
                            <div className="space-y-4">
                                {/* Title and Author */}
                                <div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                                        {expectBooks.bookName}
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600">
                                        By <span className="font-semibold text-indigo-600">{expectBooks.author}</span>
                                    </p>
                                </div>

                                {/* Category Badge */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        {expectBooks.category}
                                    </span>
                                </div>

                                {/* Review */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold text-gray-900">Review:</span> {expectBooks.review}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {expectBooks.tags?.map((tag, index) => (
                                            <span 
                                                key={index} 
                                                className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors duration-200"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Book Details Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Pages</p>
                                            <p className="font-semibold text-gray-900">{expectBooks.totalPages}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-50 rounded-lg">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Publisher</p>
                                            <p className="font-semibold text-gray-900">{expectBooks.publisher}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg">
                                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Year</p>
                                            <p className="font-semibold text-gray-900">{expectBooks.yearOfPublishing}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-50 rounded-lg">
                                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Rating</p>
                                            <div className="flex items-center gap-1">
                                                <span className="font-semibold text-gray-900">{expectBooks.rating}</span>
                                                <span className="text-yellow-400">★</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <button onClick={() => hendelReadBook(expectBooks)} className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                            Read Now
                                        </span>
                                    </button>
                                    
                                    <button onClick={()=> hendelWishlistBook(expectBooks)} className="group px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transform hover:-translate-y-0.5 transition-all duration-200">
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                            Add to Wishlist
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;