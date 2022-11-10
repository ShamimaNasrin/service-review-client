import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dentist-server.vercel.app/servicesHome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mt-7 p-10'>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">The Best Quality <br /> Service You Can Get</h2>
                <p className='w-1/2 mx-auto mt-8 text-xl'>To maintain dental health I provide a range of services for my patients</p>
            </div>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-auto px-5 justify-evenly justify-items-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <Link to='/services'>
                <button className='btn mt-4 px-9 mx-auto block bg-blue-500 hover:bg-blue-700 border-0'>See all</button>
            </Link>
        </div>
    );
};

export default ServiceSection;