import React from 'react';
import Banner from '../Banner/Banner';
import Exception from '../Exception/Exception';
import Lending from '../Lending/Lending';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Lending></Lending>
            <Services></Services>
            <Exception></Exception>
            
        </div>
    );
};

export default Home;