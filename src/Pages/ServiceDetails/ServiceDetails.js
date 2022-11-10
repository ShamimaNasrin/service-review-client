import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { FaRegMoneyBillAlt, FaStar } from "react-icons/fa";
import ReviewCard from './Reviews/ReviewCard';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
    const { user, loading } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, image_url, price, title, intro_text, rating, description } = service;
    //console.log(service);

    useTitle('ServiceDetails');
    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const date = form.date.value;
        const message = form.message.value;
        //console.log(name, email, date, message);

        const review = {
            service: _id,
            serviceName: title,
            price,
            patient: name,
            email,
            date,
            message
        }

            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast('Your review added successfuly');
                        form.reset();
                    }
                })
                .catch(er => console.error(er));
        }

    

    return (
        <div>
            {/* service details section */}
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

            {/* reviews section */}
            <section>
                <div>
                    <div className='text-center mt-7 p-10'>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">Reviews</h2>

                    </div>
                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-auto px-5 justify-evenly justify-items-center'>
                        {/* {
                            services.map(service => <ReviewCard
                                key={service._id}
                                service={service}
                            ></ReviewCard>)
                        } */}
                    </div>

                    {/* review form */}
                    {user?.uid ?

                        <div className='mx-auto'>
                            <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center sm:justify-center md:justify-start lg:justify-start items-center sm:items-center md:items-start lg:items-start md:w-1/2 lg:w-2/5 mx-auto'>
                                <form onSubmit={handleAddReview} className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-9/12 p-0 sm:p-1 md:p-4 lg:p-7'>
                                    <h2 className="text-4xl font-bold mb-6">Review Form</h2>

                                    <div className='grid grid-cols-1 gap-4'>
                                        <input name="name" type="text" placeholder="Your Name" className="input input-ghost w-full bg-white border-teal-200" required/>

                                        <input name="date" type="date" placeholder="mm/dd/yyy" className="input input-ghost w-full bg-white border-teal-200" required/>

                                        <input name="email" type="text" placeholder="email" defaultValue={user?.email} className="input input-ghost w-full bg-white border-teal-200" />

                                        <textarea name="message" className="textarea bg-white h-24 w-full border-teal-200" placeholder="Message" ></textarea>
                                    </div>


                                    <input className='btn w-10/12 mx-auto block mt-7 bg-blue-500 hover:bg-blue-700 border-0' type="submit" value="Add review" />
                                </form>
                            </div>
                        </div>

                        : <p className='text-center'>Please to add a review<Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>

                    }
                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;