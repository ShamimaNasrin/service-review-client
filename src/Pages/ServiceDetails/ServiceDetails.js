import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { FaRegMoneyBillAlt, FaStar } from "react-icons/fa";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, image_url, price, title, intro_text, rating, description } = service;
    //console.log(service);

    useTitle('ServiceDetails');
    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <section className='p-6'>

            <h1 className='text-3xl text-center font-bold mb-5'>Service Details:</h1>

                <div className='bg-teal-50 rounded-lg p-6 lg:mx-24 md:mx-16 sm:mx-9 mx-5 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center'>

                    <div className='md:w-1/2 lg:w-2/5 flex justify-center items-center'>
                        <img className='w-2/4' src={image_url} alt="header img" />
                    </div>

                    <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center sm:justify-center md:justify-start lg:justify-start items-center sm:items-center md:items-start lg:items-start w-11/12 sm:w-10/12 md:w-1/2 lg:w-3/5'>
                        <div className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 p-0 sm:p-1 md:p-2 lg:p-3'>
                            <h2 className="text-4xl font-bold mb-6">{title}</h2>
                            <p className=''><span className='font-bold'>Description: </span>{description}</p>

                            <div className='flex justify-start items-center mt-2'>
                                <div className='flex justify-center items-center '>
                                    <FaRegMoneyBillAlt className='text-xl text-yellow-400' />
                                    <p className='font-bold ml-1'>Cost:</p>
                                </div>
                                <p className='font-semibold ml-1'>{price}$</p>
                            </div>

                            <div className='flex justify-start items-center mt-2'>
                                <div className='flex justify-center items-center '>
                                    <FaStar className='text-xl text-yellow-400' />
                                    <p className='font-bold ml-1'>Rating:</p>
                                </div>
                                <p className='font-semibold text-center ml-1'>{rating}</p>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default ServiceDetails;