import React from 'react';
import './Banner.css';
import img1 from '../../../images/banner-img.png';

const Banner = () => {
    return (
        <div>
            <section>
                <header className='flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row justify-center items-center header-sec'>

                    <div className='w-10/12 sm:w-9/12 md:w-1/2 lg:w-1/2 mt-4'>
                        <div className='px-5'>
                            <h1 className='w-3/4 mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold '>Your great smile begins with a great dentist</h1>
                            <p className='w-3/4 mx-auto text-xl mt-8'>Let's check how your dental health is with complete and modern facilities services.</p>
                        </div>
                    </div>
                    <div className='w-10/12 sm:w-9/12 md:w-1/2 lg:w-1/2 flex justify-center items-center'>
                        <img className='w-2/4' src={img1} alt="header img" />
                    </div>
                </header>
            </section>
        </div>
    );
};

export default Banner;