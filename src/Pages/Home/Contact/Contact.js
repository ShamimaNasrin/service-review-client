import React from 'react';
import img1 from '../../../images/contact.png';

const Contact = () => {
    return (
        <div className='p-6'>
            <div className='bg-teal-50 rounded-lg p-6 lg:m-24 md:m-16 sm:m-9 m-5 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center'>

                <div className='w-11/12 sm:w-10/12 md:w-1/2 lg:w-3/5 flex justify-center items-center'>
                    <img className='w-2/4' src={img1} alt="header img" />
                </div>

                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center sm:justify-center md:justify-start lg:justify-start items-center sm:items-center md:items-start lg:items-start md:w-1/2 lg:w-2/5'>
                    <form className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-9/12 p-0 sm:p-1 md:p-4 lg:p-7'>
                        <h2 className="text-4xl font-bold mb-6">Contact</h2>

                        <div className='grid grid-cols-1 gap-4'>
                            <input name="Name" type="text" placeholder="Name" className="input input-ghost w-full bg-white border-teal-200" />
                            <input name="phone" type="text" placeholder="Phone" className="input input-ghost w-full bg-white border-teal-200" required />
                            <input name="email" type="text" placeholder="email" className="input input-ghost w-full bg-white border-teal-200" />
                            <textarea name="message" className="textarea bg-white h-24 w-full border-teal-200" placeholder="Message" required></textarea>
                        </div>


                        <input className='btn w-10/12 mx-auto block mt-7 bg-blue-500 hover:bg-blue-700 border-0' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;