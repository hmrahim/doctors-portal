import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exception from '../Exception/Exception';
import Footer from '../Footer/Footer';
import Lending from '../Lending/Lending';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Lending></Lending>
            <Services></Services>
            <Exception></Exception>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;