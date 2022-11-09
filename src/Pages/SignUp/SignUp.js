import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/signUp.png';

const SignUp = () => {
    return (
        <div>
            <div className='bg-teal-50 rounded-lg p-6 lg:m-24 md:m-16 sm:m-9 m-5 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center'>

                <div className='w-11/12 sm:w-10/12 md:w-1/2 lg:w-3/5 flex justify-center items-center'>
                    <img className='w-2/4' src={img1} alt="header img" />
                </div>

                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center items-center md:w-1/2 lg:w-2/5 card w-full max-w-sm shadow-2xl bg-base-100 py-12'>
                    <h1 className="text-5xl text-center font-bold mb-6">Sign up</h1>
                    <form className='w-11/12  p-0 sm:p-1 md:p-4 lg:p-7 mx-auto'>

                        <div className='grid grid-cols-1 gap-4'>

                            <div className="form-control">

                                <input type="text" name='name' placeholder="Your Name" className="input w-full bg-white border-teal-200" required />
                            </div>
                            <div className="form-control">

                                <input type="text" name='photo' placeholder="photo url" className="input w-full bg-white border-teal-200" />
                            </div>
                            <div className="form-control">

                                <input type="email" name='email' placeholder="Your email" className="input w-full bg-white border-teal-200" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="password" className="input w-full bg-white border-teal-200" required />
                            </div>

                        </div>

                        <input className='btn w-full mt-7 bg-blue-500 hover:bg-blue-700 border-0' type="submit" value="Sign up" />
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;