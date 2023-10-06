import React from 'react'
import { useLocation } from 'react-router-dom'

const ServiceDetails = () => {
    const { state } = useLocation();
    const { name, description, price, image } = state || {}
    return (
        <div className='container mx-auto px-2 md:px-0 mb-20'>
            <div className='flex justify-center gap-5 flex-col md:flex-row'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className=' flex flex-col'>
                    <div className='flex-1 space-y-3'>
                        <h1 className='text-3xl  text-red-300 font-bold'>{name}</h1>
                        <p className='text-justify text-xs sm:text-sm text-gray-600 '>{description}</p>
                    </div>


                    <div>
                        <button className='bg-purple-700 rounded-sm text-white font-bold w-full mx-auto  py-3 '>
                            Order now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails