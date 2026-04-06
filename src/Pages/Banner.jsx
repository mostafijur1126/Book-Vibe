import React from 'react';
import bannerimg from '../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='w-full bg-gray-50'>
            <div className="hero  max-w-7xl mx-auto px-4 md:px-8">
                <div className="hero-content flex-col md:flex-row-reverse gap-10">
                    <img
                        src={bannerimg}
                        className="max-w-sm  "
                    />
                    <div className='space-y-6'>
                        <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
                        <button className="btn bg-blue-600 text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;