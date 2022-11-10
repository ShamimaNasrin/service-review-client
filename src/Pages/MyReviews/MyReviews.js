import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    useEffect(() => {
        fetch(`https://dentist-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dentist-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])


    //delete a single review
    const handleDelete = (id) => {

        const proceed = window.confirm('confirm delete');
        if (proceed) {

            fetch(`https://dentist-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE',
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('dentist-token')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('review deleted successfully');
                        const remaining = myreviews.filter(rvw => rvw._id !== id);
                        setMyreviews(remaining);
                    }
                });
        }

    }


    return (
        <div>
            {myreviews.length === 0 ?
                <div className='text-center mt-7 p-10 mx-auto'>
                    <h2 className='text-5xl'>No review</h2>
                </div>
                : <div className='grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-auto px-5 justify-evenly justify-items-center'>
                    {
                        myreviews.map(myreview => <MyReviewsCard
                            key={myreview._id}
                            myreview={myreview}
                            handleDelete={handleDelete}
                        ></MyReviewsCard>)
                    }
                </div>
            }



        </div>
    );
};

export default MyReviews;