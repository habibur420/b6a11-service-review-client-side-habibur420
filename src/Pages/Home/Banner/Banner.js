import React from 'react';
import banner from '../../../assets/home/banner2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='md:flex flex-row bg-[#021b29] pt-20'>
            <div className='basis-1/2 flex justify-center px-6 items-center text-white'>
                <div>
                    <h1 className='text-6xl text-left '>Professinal <br /> Photographer</h1>
                    <p className='text-xl mt-8 text-left text-gray-400'>Based in Amsterdam, I specialize in <br /> conceptual  photography and love to take photos with creativity and passion.</p>
                    <div className='text-left mt-4'>
                        <button className='bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-12 rounded'>All service</button>
                    </div>
                </div>
            </div>
            <div className='basis-1/2 flex justify-center w-full relative md:px-0 px-5 '>
                <div className='img-gradient w-full'>
                    <img src={banner} alt="" className=' ' />
                </div>
            </div>
        </div>
    );
};

export default Banner;