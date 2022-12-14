import React from 'react';
import { Helmet } from 'react-helmet-async';
import Photo from '../../Photo/Photo';
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
            <Photo></Photo>
        </div>
    );
};

export default Home;