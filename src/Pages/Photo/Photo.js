import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/home-img/photo.jpg'

const Photo = () => {
    return (
        <div className='md:flex flex-row bg-[#021e29] '>
            <div className='basis-2/5'>
                <img src={photo} className="w-full h-full" alt="" />
            </div>
            <div className='basis-3/5 flex justify-center items-center'>
                <div className='p-6 text-gray-400 '>
                    <h1 className='lg:text-6xl md:text-5xl text-4xl font-semibold'>Why I fell in love with photography</h1>
                    <p className='mt-8'>Recent campaigns have included food photography, video and animations for Rowse Honey, drinks photography
                        Marks & Spencer, Breyers Ice Cream, Phillips Shavers, Waitrose Wine as well as portraits for The Department of</p>
                    <Link to='/add/service'>
                    <button className='bg-yellow-600 mt-4 text-xl hover:bg-yellow-700 text-white font-bold py-2 px-12 rounded'>
                        Add service
                    </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Photo;