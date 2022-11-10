import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsCard = ({ myreview, handleDelete }) => {
    //console.log(myreview);
    const { userImg, patient, serviceName, _id, message } = myreview;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img className='h-48 w-full' src={userImg} alt="imgs" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{serviceName}</h2>
                <p>{message.slice(0, 300)}</p>
                <p>{patient}</p>

                <div className="flex justify-between items-center">
                    <button onClick={() => handleDelete(_id)} className='btn bg-blue-500 hover:bg-blue-700 border-0'>delete</button>

                    <Link to={`/updatereviews/${_id}`}>
                    <button className='btn bg-blue-500 hover:bg-blue-700 border-0'>update</button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default MyReviewsCard;