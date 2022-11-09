import React from 'react';

const AddService = () => {

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.title.value;
        const title = form.desTitle.value;
        const email = form.email.value;
        const img = form.photo.value;
        const price = form.price.value;
        const description = form.text.value;

        const service = {
            name,
            title,
            email, 
            img, 
            price,
            description
        }

        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => console.log(e))
    }




    return (
        <div className='py-24 bg-[#01141f] text-white'>
        <h1 className='text-center text-3xl mb-5 '>Add Your <span className='text-yellow-600 font-semibold'>PhotoGraphy</span> Services</h1>
            <form  onSubmit={handleAddService} className='md:w-4/5 mx-auto'>
                <div className='md:flex gap-11'>
                    <div className="mb-3 md:w-1/2">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            Title Name
                        </label>
                        <input name='title' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-700 focus:outline-yellow-600 " type="text" placeholder="Title Name" required />
                    </div>
                    <div className="mb-3 md:w-1/2">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            Description Title
                        </label>
                        <input name='desTitle' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 " type="text" placeholder="Description Title"  required />
                    </div>
                </div>
                <div className='md:flex gap-11'>
                    <div className="mb-3 md:w-1/2">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input name='email' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-700 focus:outline-yellow-600 " type="email" placeholder="Email" required />
                    </div>
                    <div className="mb-3 md:w-1/2">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            Photo
                        </label>
                        <input name='photo' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 " type="text" placeholder="Photo URL"  required />
                    </div>
                </div>
                <div className='md:flex gap-11'>
                    <div className="mb-3 md:w-1/2">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            price
                        </label>
                        <input name='price' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-700 focus:outline-yellow-600 " type="text" placeholder="Price" required />
                    </div>
                    <div className="mb-3 md:w-1/2">
                        <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                            Description
                        </label>
                        <input name='text' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 " type="text" placeholder="Description" required />
                    </div>
                </div>
                <button type='submit' className='bg-yellow-600 flex justify-center items-center hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;