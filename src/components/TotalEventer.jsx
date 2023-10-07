import React from 'react'
import { IoLocationOutline, IoManOutline } from 'react-icons/io5'
import { CiDollar } from 'react-icons/ci'
import bg from '../assets/banner/6.jpg'

const TotalEventer = () => {
    const tbackgroundImage = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='mt-5 mb-20 my-96'>
            <div style={tbackgroundImage} className='py-20'>
                <div className='flex justify-center gap-28 lg:gap-52 flex-col lg:flex-row items-center'>
                    <div className='flex flex-col items-center'>
                        <div className='relative'>
                            <IoManOutline className='text-[#5f6789]' size={100} />
                            <p className='text-5xl absolute top-10 font-bold text-white'>1256</p>
                        </div>
                        <p className='mt-10 text-xl text-white font-bold'>PARTICIPANT</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='relative'>
                            <IoLocationOutline className='text-[#5f6789]' size={100} />
                            <p className='text-5xl absolute left-2 top-10 font-bold text-white'>255</p>
                        </div>
                        <p className='mt-10 text-xl text-white font-bold'>TOTAL EVENTS
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='relative'>
                            <CiDollar className='text-[#5f6789]' size={100} />
                            <p className='text-5xl absolute left-5 top-10 font-bold text-white'>19</p>
                        </div>
                        <p className='mt-10 text-xl text-white font-bold'>SPONSORS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalEventer