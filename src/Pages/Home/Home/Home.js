import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className=''>
        <Helmet>
            <title>Home photoGraphy</title>
        </Helmet>
            <Banner></Banner>
            <Services/>
        </div>
    );
};

export default Home;