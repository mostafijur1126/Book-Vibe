import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import ListedBooks from '../Pages/ListedBooks';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    function hendelReadBook(books) {
        const isExistBook = storedBooks.find(
            (book) => book.bookId === books.bookId
        );

        if (isExistBook) {
            toast.error("The book is already exist");
        } else {
            setStoredBooks([...storedBooks, books]);
            toast.success(`${books.bookName} is added to list`)
        }
    }
    function hendelWishlistBook(books) {
        const isExistReadlistBook = storedBooks.find(
            (book) => book.bookId === books.bookId
        );
        if(isExistReadlistBook){
            toast.error("This book is already in read list");
            return;
        }
        const isExistBook = wishlist.find(
            (book) => book.bookId === books.bookId
        )

        if (isExistBook) {
            toast.error("The book is already exist");
        } else {
            setWishlist([...wishlist, books]);
            toast.success(`${books.bookName} is added to list`)
        }
    }

    const data = {
        storedBooks,
        setStoredBooks,
        hendelReadBook,
        wishlist,
        setWishlist,
        hendelWishlistBook
    };
    // console.log(wishlist);

    return (
        <BookContext.Provider value={data}>
            {children}
            
        </BookContext.Provider>
    );
};

export default BookProvider;