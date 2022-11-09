import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import ServiceSection from './ServiceSection/ServiceSection';

const Home = () => {
    useTitle('Dr. Watson');
    return (
        <div>
            <Banner></Banner>
            <Appointment></Appointment>
            <ServiceSection></ServiceSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;