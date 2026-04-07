import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ListedBooks from '../Pages/ListedBooks';
import { addReadlistFormLocalDB, getAllReadlistFormLocalDB } from '../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState(()=> getAllReadlistFormLocalDB());
    const [wishlist, setWishlist] = useState([]);

    // useEffect(()=> {
    //     const getAlReadlistFormLDB = getAllReadlistFormLocalDB();
    //     // console.log(getAlReadlistFormLDB);
    // },[]);
console.log(storedBooks);

    function hendelReadBook(books) {
        addReadlistFormLocalDB(books);
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