import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../assets/navbar-logo/profile.png'

const Review = ({ review }) => {
    const { photo, name, text, email } = review;


    return (
        <div className='py-10 text-center rounded shadow-lg mt-4 p-4 bg-[#011f1e]'>
            <div className='flex justify-center'>
                <img className='w-16 rounded-full border-yellow-500 p-1' src={photo ? photo : logo} alt="" />
            </div>
            <div>
                <p className='text-yellow-600 font-bold'>{name}</p>
                <p>{email}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Review;