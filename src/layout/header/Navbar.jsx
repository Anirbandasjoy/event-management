import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import profileImage from '../../assets/user.png'
import { AuthContext } from '../../context/AuthProvider'

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navitems = <>
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/service">Services</NavLink></li> */}
        <li><NavLink to="/contact">Contact</NavLink></li>


    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navitems
                        }
                    </ul>
                </div>
                <div className='flex items-center '>
                    <Link to="/">
                        <img className='w-20 mt-2' src={logo} alt="logo" />
                    </Link>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navitems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-9 rounded-full">
                        {
                            user ? <img src={user?.photoURL} /> : <img src={profileImage} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar