import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch(`https://server-habibur420.vercel.app/services?size=3`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div className='bg-[#01141f] text-white py-16  md:px-16 px-7'>
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
            <div className='text-center mt-4'>
                <Link to='/services'>
                    <button className='bg-yellow-600 text-xl hover:bg-yellow-700 text-white font-bold py-2 px-12 rounded'>
                        All service
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Services;