import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewCart from './ReviewCart';
import { Helmet } from 'react-helmet-async';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    const { user, logOut } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://server-habibur420.vercel.app/my/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('photography-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logOut])

    


    const handleDelete = id => {
        fetch(`https://server-habibur420.vercel.app/review/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const remaining = reviews.filter(odr => odr._id !== id);
                setReviews(remaining);
                console.log(data)
            })
    }




    return (
        <div className='py-24 bg-[#010e1f] md:px-16 px-6 text-center text-white'>
            <Helmet>
                <title>My Review photoGraphy</title>
            </Helmet>
            {
                reviews.length === 0 ? <>
                    <h1 className='text-3xl font-semibold text-center text-white' >No Review here Please Added Review</h1>
                    <Link to='/'>
                        <button type='submit' className='bg-yellow-600 mt-5 hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                            Back To Homepage
                        </button>
                    </Link>
                </>
                    : <h1 className='text-3xl font-semibold text-center text-white' >My All Review Here {reviews.length} </h1>
            }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                {
                    reviews?.map(review => <ReviewCart
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    />)
                }
            </div>
        </div>
    );
};

export default MyReview;