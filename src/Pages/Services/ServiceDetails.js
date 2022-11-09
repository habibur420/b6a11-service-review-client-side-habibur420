import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import AddReviw from '../Review/AddReviw';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const { _id, name, img, description, price, title } = useLoaderData();
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?id=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [_id, reviews])



    return (
        <div className='bg-[#01141f] text-white '>
            {/* review section  */}
            <div className='md:px-16 px-6 py-24 '>
                <div className=''>
                    <h1 className='font-semibold text-3xl'>{name}</h1>
                    <p className='text-xl text-gray-400 mb-4'>{title}</p>
                </div>
                <PhotoProvider>
                    <div className="cursor-pointer md:w-2/5">
                        <PhotoView src={img}>
                            <img src={img} className="w-full h-56 rounded" alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
                <p className='mt-4 text-xl font-bold '>Price: <span className='text-yellow-600'>${price}</span></p>
                <p className='text-gray-400'>{description}</p>
            </div>
            {/* add review  */}
            <div className='md:px-16 px-6 bg-[#021b29]'>
                <AddReviw id={_id} ServiceName={name} />
            </div>
            {/* all review  */}
            <div className='bg-[#010e1f] py-16 md:px-16 px-6'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold'>{name} <span className='text-yellow-600'>REVIEWS</span> </h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;