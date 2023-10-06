import React, { useContext } from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram, AiOutlineClockCircle } from 'react-icons/ai'
import { BsFacebook, BsTelephoneForward } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("logOut successfully")
                navigate("/login")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-3 '>

            <div className='flex flex-col md:flex-row mb-6 md:mb-0 text-xs items-center  gap-5 list-none'>
                <div className='flex items-center gap-2'>
                    <BsTelephoneForward />
                    <li>(+088) 01772838734</li>
                </div>
                <div className='flex items-center gap-2'>
                    <HiOutlineMail />
                    <li>adj@gmail.com</li>
                </div>
                <div className='flex items-center gap-2'>
                    <AiOutlineClockCircle />
                    <li> Sut – Fri 9.00 am – 6.00 pm</li>
                </div>

            </div>
            <div className='flex items-center gap-3'>
                <button className=" bg-gray-100">
                    <AiFillTwitterCircle className='text-gray-500 hover:text-teal-400 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <BsFacebook className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <AiFillLinkedin className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <AiOutlineInstagram className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>

                {
                    user ? <Link onClick={handleLogOut} className=" bg-red-500 py-1 px-3 text-white font-bold shadow-md rounded-sm text-sm">
                        Logout
                    </Link> : <Link to="/login" className=" bg-red-500 py-1 px-3 text-white font-bold shadow-md rounded-sm text-sm">
                        Login
                    </Link>
                }

            </div>

        </div>




    )
}

export default Header