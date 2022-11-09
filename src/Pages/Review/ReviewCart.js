import React from 'react';
import logo from '../../assets/navbar-logo/profile.png'

const ReviewCart = ({review}) => {
    const {name, email, text, photo, ServiceName} = review;
    return (
        <div>
            <div className='py-10 text-center rounded shadow-lg mt-4 p-4 bg-[#011f1e] text-gray-300'>
            <div className='flex justify-center'>
                <img className='w-16 rounded-full border-yellow-500 p-1' src={photo ? photo : logo} alt="" />
            </div>
            <div>
                <p className='text-yellow-600 font-bold'>{name}</p>
            <h1 className=' text-lg font-bold '>Service Name: <span>{ServiceName}</span></h1>
                <p>{email}</p>
                <p>{text}</p>
            </div>
        </div>
        </div>
    );
};

export default ReviewCart;