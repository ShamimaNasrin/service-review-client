import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
    useTitle('Add Services');
    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const rating = form.rating.value;
        const image_url = form.image_url.value;
        const price = form.price.value;
        const intro_text = form.intro_text.value;
        const description = form.description.value;

        //console.log(name, email, date, message);

        const review = {
            title,
            rating,
            image_url,
            price,
            intro_text,
            description
        }

        fetch('https://dentist-server.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.acknowledged) {
                    toast('Your service added successfuly');
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }


    return (
        <div>
            <div className='mx-auto'>
                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center sm:justify-center md:justify-start lg:justify-start items-center sm:items-center md:items-start lg:items-start md:w-1/2 lg:w-2/5 mx-auto'>
                    <form onSubmit={handleAddService} className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-9/12 p-0 sm:p-1 md:p-4 lg:p-7 mx-auto'>
                        <h2 className="text-4xl font-bold mb-6">Add services</h2>

                        <div className='grid grid-cols-1 gap-4'>
                            <input name="title" type="text" placeholder="title" className="input input-ghost w-full bg-white border-teal-200" required />

                            <input name="image_url" type="text" placeholder="image_url" className="input input-ghost w-full bg-white border-teal-200" />

                            <input name="rating" type="text" placeholder="rating" className="input input-ghost w-full bg-white border-teal-200" />

                            <input name="price" type="number" placeholder="price" className="input input-ghost w-full bg-white border-teal-200" />

                            <textarea name="intro_text" className="textarea bg-white h-24 w-full border-teal-200" placeholder="intro_text" ></textarea>

                            <textarea name="description" className="textarea bg-white h-24 w-full border-teal-200" placeholder="description" ></textarea>
                        </div>


                        <input className='btn w-10/12 mx-auto block mt-7 bg-blue-500 hover:bg-blue-700 border-0' type="submit" value="Add review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;