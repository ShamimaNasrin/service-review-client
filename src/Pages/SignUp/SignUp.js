import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import img1 from '../../images/signUp.png';
import { Rings } from 'react-loader-spinner'

const SignUp = () => {
    const { createUser, loading, updateUserProfile, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';

    useTitle('Signup');

    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //create user
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                if (loading) {
                    <Rings
                        height="80"
                        width="80"
                        color="#6fb7ef"
                        radius="6"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="rings-loading"
                    />
                }
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
                navigate('/');
                toast('Signup successfull');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    //to get userName and Photo
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className='bg-teal-50 rounded-lg p-6 lg:m-24 md:m-16 sm:m-9 m-5 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center'>

                <div className='w-11/12 sm:w-10/12 md:w-1/2 lg:w-3/5 flex justify-center items-center'>
                    <img className='w-2/4' src={img1} alt="header img" />
                </div>

                <div className='mt-6 sm:mt-6 md:mt-0 lg:mt-0 flex justify-center items-center md:w-1/2 lg:w-2/5 card w-full max-w-sm shadow-2xl bg-base-100 py-12'>
                    <h1 className="text-5xl text-center font-bold mb-6">Sign up</h1>
                    <form onSubmit={handleSignUp} className='w-11/12  p-0 sm:p-1 md:p-4 lg:p-7 mx-auto'>

                        <div className='grid grid-cols-1 gap-4'>

                            <div className="form-control">

                                <input type="text" name='name' placeholder="Your Name" className="input w-full bg-white border-teal-200" required />
                            </div>
                            <div className="form-control">

                                <input type="text" name='photoURL' placeholder="photo url" className="input w-full bg-white border-teal-200" />
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