import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Link } from 'react-router';

const ListedWishlist = ({shortingType}) => {
    const { wishlist } = useContext(BookContext);

    const [filteredwishlist, setFilteredwishlist] = useState(wishlist);

    useEffect(() => {
        if (shortingType) {
            if (shortingType === "pages") {
                const sortedData = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
                setFilteredwishlist(sortedData);
            } else if (shortingType === "reating") {
                const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating);
                setFilteredwishlist(sortedData);
            }
        }
    }, [shortingType,wishlist]);

    if (filteredwishlist.length === 0) {
        return <div>
            <h2>No Wish list data foud</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    filteredwishlist.map((book, ind) => (
                        <Link key={ind} className=" p-5 card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    className='h-40'
                                    src={book.image} />
                            </figure>
                            <div className="card-body">
                                <div className='flex gap-3'>
                                    {book.tags.map((tag, ind) => (
                                        <div key={ind} className="badge badge-secondary">{tag}</div>
                                    ))}
                                </div>
                                <h2 className="card-title">
                                    {book.bookName}
                                </h2>
                                <p>{book.author}</p>
                                <div className="card-actions justify-between border-t border-gray-400 border-dashed">
                                    <div className="">{book.category}</div>
                                    <div className="">{book.rating}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default ListedWishlist;