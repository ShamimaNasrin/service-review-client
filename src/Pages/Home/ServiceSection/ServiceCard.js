import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt, FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({ service }) => {
    const { image_url, price, title, _id, intro_text, rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image_url}>
                        <img className='h-48 w-full' src={image_url} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{intro_text.slice(0, 100)}</p>
                <div className='flex justify-between items-center mx-auto w-9/12 mt-2'>
                    <div className='flex justify-center items-center'>
                        <FaRegMoneyBillAlt className='text-xl text-yellow-400' />
                        <p className='font-semibold text-center ml-1'>{price}$</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <FaStar className='text-xl text-yellow-400' />
                        <p className='font-semibold text-center ml-1'>{rating}</p>
                    </div>

                </div>
                <div className="card-actions justify-center">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn mt-4 px-9 mx-auto block bg-blue-500 hover:bg-blue-700 border-0">View details</button>
                    </Link>
                
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;