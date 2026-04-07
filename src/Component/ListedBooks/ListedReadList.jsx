import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Link } from 'react-router';


const ListedReadList = ({shortingType}) => {
    const { storedBooks } = useContext(BookContext);
    const [filteredReadlist,setFilteredReadlist] = useState(storedBooks);

    useEffect(()=>{
        if(shortingType){
            if(shortingType === "pages"){
                const sortedData = [...storedBooks].sort((a,b)=> a.totalPages - b.totalPages);
                setFilteredReadlist(sortedData);
            }else if(shortingType === "reating"){
                const sortedData = [...storedBooks].sort((a,b)=> a.rating - b.rating);
                setFilteredReadlist(sortedData);
            }
        }
    },[shortingType]);


    if(filteredReadlist.length === 0){
        return <div>
            <h2>No Read list data foud</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    filteredReadlist.map((book, ind) => (
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

export default ListedReadList;