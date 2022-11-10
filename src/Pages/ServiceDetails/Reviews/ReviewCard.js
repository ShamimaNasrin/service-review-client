import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({review}) => {
    //console.log(review);
    const { userImg, patient, serviceName, _id, message } = review;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img className='h-48 w-full' src={userImg} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{serviceName}</h2>
                <p>{message.slice(0,300)}</p>
                <p>{patient}</p>

            </div>
        </div>
    );
};

export default ReviewCard;