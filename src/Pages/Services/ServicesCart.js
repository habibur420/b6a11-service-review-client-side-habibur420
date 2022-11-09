import React from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesCart = ({ service }) => {
    const { img, _id, name, price, description } = service;
    return (
        <div className='w-full bg-[#021b29] shadow-lg rounded-lg'>
            <div className='flex justify-center m-3'>
                <PhotoProvider>
                    <div className="cursor-pointer">
                        <PhotoView src={img}>
                        <img src={img} className="w-full h-56 rounded" alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </div>
            <div className='mx-4 mt-4'>
                <h1 className='text-1xl font-bold'>{name}</h1>
                <p className='text-1xl font-bold '>Price: <span className='text-yellow-600'>${price}</span></p>
                <p className='text-gray-400'>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                <div className='flex w-full justify-end my-4'>
                    <Link to={`/service/details/${_id}`}>
                        <button type='submit' className='bg-yellow-600 flex justify-center items-center hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                            <FaInfoCircle className=' text-white text-3xl mr-2 rounded-lg  ' />
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;