import React, { use } from 'react';
const bookPromice = fetch("/booksData.json").then((res) => res.json());

const Books = () => {
    const books = use(bookPromice);
    console.log(books);
    return (

        <div className='w-full bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 md:px-8'>
                <h1 className='text-gray-900 text-center text-3xl font-bold'>Books</h1>
                <div className='grid md:grid-cols-3 gap-10'>
                {
                    books.map(book => (
                        <div className=" p-5 card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                className='h-40'
                                    src={book.image} />
                            </figure>
                            <div className="card-body">
                                <div className='flex gap-3'>
                                    {book.tags.map((tag) => (
                                        <div className="badge badge-secondary">{tag}</div>
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
                        </div>
                    ))
                }

                </div>
            </div>
        </div>
    );
};

export default Books;