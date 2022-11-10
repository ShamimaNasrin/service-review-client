import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const UpdateReviews = () => {
    const { user, loading } = useContext(AuthContext);
    useTitle('Add Services');
    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // const storedReview = useLoaderData();
    // const [review, setReview] = useState(storedReview);
    // //console.log(storedReview);

    // const handleUpdateReview = event =>{
    //     event.preventDefault();
    //     // console.log(review);
    //     fetch(`https://dentist-server.vercel.app/myreviews/${storedReview._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.modifiedCount > 0){
    //             toast('review updated');
    //             console.log(data);
    //         }

    //     })
    // }

    // const handleInputChange = event =>{
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     const newData = {...review}
    //     newData[field] = value;
    //     setReview(newData);
    // }
    return (
        <div>
            <div className='mx-auto'>
                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center sm:justify-center md:justify-start lg:justify-start items-center sm:items-center md:items-start lg:items-start md:w-1/2 lg:w-2/5 mx-auto'>
                    <form className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-9/12 p-0 sm:p-1 md:p-4 lg:p-7 mx-auto'>
                        <h2 className="text-4xl font-bold mb-6">Update Review</h2>

                        <div className='grid grid-cols-1 gap-4'>
                            <input name="name" type="text" placeholder="Your Name" defaultValue={user?.name} className="input input-ghost w-full bg-white border-teal-200" required />

                            <input  name="date" type="date" placeholder="mm/dd/yyy" className="input input-ghost w-full bg-white border-teal-200" required />

                            <input name="email" type="text" placeholder="email" defaultValue={user?.email} className="input input-ghost w-full bg-white border-teal-200" readOnly />

                            <textarea  name="message" className="textarea bg-white h-24 w-full border-teal-200" placeholder="Message" ></textarea>
                        </div>


                        <input className='btn w-10/12 mx-auto block mt-7 bg-blue-500 hover:bg-blue-700 border-0' type="submit" value="Add review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateReviews;