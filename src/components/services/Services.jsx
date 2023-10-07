import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get("./data.json");
        setServiceData(data)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='my-20 container mx-auto'>
            <div className='text-center space-y-7'>
                <h1 className='text-4xl text-gray-400' data-aos="zoom-in">The <span className='font-bold text-red-400' >Event Management</span> Specialists</h1>
                <p className='text-sm text-gray-400' data-aos="zoom-in">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer <br /> full range of Events Management Services that scale to your needs & budget.</p>
            </div>

            <div className='mt-24 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 px-2 lg:px-0'>

                {
                    serviceData.map(data => {
                        return <div key={data.id} data-aos="zoom-in">
                            <div>
                                <div className='relative service'>
                                    <img className=' rounded-sm w-full h-[20rem]' src={data.image} alt={data.name} />
                                    <div className='absolute rounded-sm top-0 duration-700 flex justify-center items-end cursor-pointer overlay'>



                                        <Link state={data} to={`/service/${data.id}`} className='bg-purple-700 rounded-sm text-white font-bold w-[80%] mx-auto mb-3 py-2 px-3'>
                                            See details
                                        </Link>

                                    </div>

                                </div>
                                <p className='text-red-300 mt-2 font-bold text-xl text-left'>{data.name}</p>
                            </div>

                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Services