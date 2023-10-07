import React from 'react'
import { useLocation } from 'react-router-dom'

const ServiceDetails = () => {
    const { state } = useLocation();
    const { name, description, price, image } = state || {}
    return (
        <div className='container mx-auto px-2 lg:px-0 mb-20'>
            <div className='flex justify-center gap-5 flex-col lg:flex-row'>
                <div>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
                <div className=' flex flex-col'>
                    <div className='flex-1 space-y-3'>
                        <h1 className='text-3xl  text-red-300 font-bold'>{name}</h1>
                        <h2 className='text-xl  text-red-300 font-bold'>{price}</h2>
                        <p className='text-justify text-xs sm:text-sm text-gray-600 '>{description}</p>
                    </div>


                    <div>
                        <button className='bg-purple-700 mt-5 lg:mt-0 rounded-sm text-white font-bold w-full mx-auto  py-3 '>
                            Order now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails