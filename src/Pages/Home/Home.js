import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';

const Home = () => {
    useTitle('Dr. Watson');
    return (
        <div>
            <Banner></Banner>
            <Appointment></Appointment>
            <Contact></Contact>
        </div>
    );
};

export default Home;