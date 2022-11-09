import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/tooth.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    //Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    //header menus
    const menuItems = <>
        <li className='font-bold text-white'><Link to='/'>Home</Link></li>
        <li className='font-bold text-white'><Link to='/services'>Services</Link></li>
        <li className='font-bold text-white'><Link to='/blog'>Blog</Link></li>
        <li className='font-bold text-white'><Link to='/about'>About</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-bold text-white'><Link to='/'>Add service</Link></li>
                    <li className='font-bold text-white'>
                        <button onClick={handleLogOut} className='btn bg-transparent border-white border-2 px-4 btn-login'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-bold'>
                    <Link to='/login'>
                        <button className="btn bg-transparent border-white border-2 px-4 btn-login">Login</button>
                    </Link>
                </li>
        }
    </>
    return (
        <div className="navbar bg-blue-500 px-5 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-transparent border-0 lg:hidden btn-toogle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-blue-500">
                        {menuItems}
                    </ul>
                </div>

                <div className='flex'>
                    <img className='w-16' src={logo} alt="" />
                    <Link to="/" className="normal-case text-xl">
                        <h2 className='font-extrabold text-white mx-1'>Dr. <br />Watson </h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;