import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReviw = ({ id, ServiceName }) => {
    const { user } = useContext(AuthContext);

    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const text = form.text.value;
        const photo = user.photoURL;

        const date = new Date()
        console.log(date)

        const review = {
            service: id,
            name,
            email,
            text,
            photo,
            ServiceName,
        }

        fetch(`https://server-habibur420.vercel.app/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    form.reset()
                }
                console.log(data)
            })
            .catch(er => console.error(er));

    }


    return (
        <div>
        <Helmet>
            <title>Service Details photoGraphy</title>
        </Helmet>
            {
                user?.email ?
                    <div className='py-11'>
                        <h1 className='text-3xl text-center'>Please Add A Review</h1>
                        <form onSubmit={handleAddReview} className='md:w-4/5 mx-auto'>
                            <div className='md:flex gap-11'>
                                <div className="mb-3 md:w-1/2">
                                    <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                                        Full Name
                                    </label>
                                    <input name='name' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-700 focus:outline-yellow-600 " type="text" placeholder="Full Name" required />
                                </div>
                                <div className="mb-3 md:w-1/2">
                                    <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                                        Email
                                    </label>
                                    <input name='email' defaultValue={user?.email} className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 " type="email" placeholder="Email" readOnly required />
                                </div>
                            </div>
                            <div>
                                <div className="mb-3 md:w-1/2">
                                    <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                                        Review Text
                                    </label>
                                    <textarea className='lg:w-[95.666667%] w-full border text-gray-500 bg-[#01141f]' name="text" id="" cols="30" rows="10" placeholder='Review Text'></textarea>
                                </div>
                            </div>
                            <button type='submit' className='bg-yellow-600 flex justify-center items-center hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                                Submit
                            </button>
                        </form>
                    </div>
                    :
                    <div className='text-center py-11'>
                        <h1 className='text-3xl font-semibold text-center text-white' >Please Login To Add A Review </h1>
                        <Link to='/login'>
                            <button type='submit' className='bg-yellow-600 mt-5 hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                                Login
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default AddReviw;

