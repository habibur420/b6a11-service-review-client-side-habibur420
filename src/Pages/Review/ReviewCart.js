import React from 'react';
import logo from '../../assets/navbar-logo/profile.png';
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReviewCart = ({ review, handleDelete }) => {
    const { _id, name, email, text, photo, ServiceName } = review;
    return (
        <div>
            <div className='py-10 text-center rounded shadow-lg mt-4 p-4 bg-[#011f1e] text-gray-300 relative'>
                <div onClick={() => handleDelete(_id)} className='absolute cursor-pointer text-3xl top-5 right-5'>
                    <FaTimes />
                </div>
                <Link to={`/review/update/${_id}`}>
                    <div className='absolute cursor-pointer top-5 right-16'>
                        <button>Update</button>
                    </div>
                </Link>
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