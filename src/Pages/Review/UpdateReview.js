import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
    const review = useLoaderData();

    const [reviews, setReviews] = useState(review)



const handleOnSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:5000/review/${reviews?._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success('successfully updated')
        }
    })
}



    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;

        const newReview = {...reviews}
        newReview[field] = value;
        setReviews(newReview);
    }



    return (
        <div className='py-40 bg-[#01141f]'>
            <div className=''>
                <form onSubmit={handleOnSubmit} className='w-3/6 mx-auto'>
                    <div className="mb-3">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            Full Name
                        </label>
                        <input onChange={handleInputChange} name='name' defaultValue={review?.name} className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-700 focus:outline-yellow-600 " type="text" placeholder="Full Name" required />
                    </div>
                    <div className="mb-3">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            text
                        </label>
                        <textarea onChange={handleInputChange} name='text' defaultValue={review?.text} className='w-full bg-[#01121fa6] border p-3 text-gray-300' cols="30" rows="10" placeholder='enter your updated text'></textarea>
                    </div>
                    <button type='submit' className='bg-yellow-600 mt-3 hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                            Update
                        </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;