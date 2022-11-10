import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                {/* <img className='h-48 w-full' src={image_url} alt="Shoes" /> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">service title</h2>
                <p>Riview text</p>
                <p>User name</p>

                {/* <div className="card-actions justify-center">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn mt-4 px-9 mx-auto block bg-blue-500 hover:bg-blue-700 border-0">View details</button>
                    </Link>
                    
                </div> */}
            </div>
        </div>
    );
};

export default ReviewCard;