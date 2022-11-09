import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';

const Home = () => {
    useTitle('Dr. Watson');
    return (
        <div>
            <Banner></Banner>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;