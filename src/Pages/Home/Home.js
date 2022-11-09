import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner/Banner';

const Home = () => {
    useTitle('Dr. Watson');
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;