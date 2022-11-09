import React from 'react';
import img1 from '../../../images/appointment.png';

const Appointment = () => {
    return (
        <div>
            <section className='bg-cyan-50'>
                <header className='flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row justify-center items-center py-9'>

                    <div className='w-10/12 sm:w-9/12 md:w-1/2 lg:w-1/2 flex justify-center items-center'>
                        <img className='w-2/4' src={img1} alt="header img" />
                    </div>

                    <div className='w-10/12 sm:w-9/12 md:w-1/2 lg:w-1/2 mt-4'>
                        <div className='px-5'>
                            <h1 className='w-3/4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold'>See You Soon..</h1>
                            <p className='w-3/4 text-xl mt-8'>Ready to schedule an appointment? Contact us online or call <span className='text-blue-500'>111-2222</span>.</p>
                            <button className="block btn bg-blue-600 hover:bg-blue-700 border-0 mt-7">Book Appointment</button>
                        </div>
                    </div>

                </header>
            </section>
        </div>
    );
};

export default Appointment;