import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCart from './ServicesCart';

const AllServices = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch(`https://server-habibur420.vercel.app/services`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
        <Helmet>
            <title>All service photoGraphy</title>
        </Helmet>
            {
                services.length === 0 ?
                    <div className="flex justify-center items-center h-[100vh] bg-[#01141f]">
                        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                            <span className="visually-hidden"></span>
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