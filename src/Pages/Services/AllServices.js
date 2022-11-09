import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const AllServices = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            {
                services.length === 0 ?
                    <div class="flex justify-center items-center h-[100vh] bg-[#01141f]">
                        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div> :
                    <div className='bg-[#01141f] text-white py-24  md:px-16 px-7'>
                        <h1 className='text-5xl font-bold mb-4'>My Work</h1>
                        <p className='text-xl text-gray-400 mb-5'>Helping businesses through photography is what makes my job <br />
                            meaningful. Explore some of my recent work down below.</p>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                            {
                                services.map(service => <ServicesCart
                                    key={service._id}
                                    service={service}
                                />)
                            }
                        </div>
                    </div>

            }
        </div>
    );
};

export default AllServices;