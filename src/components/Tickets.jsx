import React, { useEffect, useState } from 'react'
import ticketImage from '../assets/t.jpg';
import axios from 'axios';
import Footer from './Footer';
const Tickets = () => {
    const [ticketData, setTicketData] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get("./ticket.json");
        setTicketData(data)
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(ticketData)


    return (
        <div className='mb-16'>
            <div className='mb-10' >
                <img src={ticketImage} alt="" data-aos="zoom-in" />
            </div>

            <div className=''>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 container mx-auto">
                    {
                        ticketData.map((ticket) => {
                            return <div className="w-full px-2 py-2" data-aos="zoom-in">
                                <div className=" flex  rounded  shadow-md">
                                    <div>
                                        <img src={ticket.image} className="sm:w-52 sm:h-48 object-cover w-40 h-40" />
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-lg sm:text-xl  mb-2">{ticket.name}</div>

                                        <p className="text-gray-700 text-xs sm:text-lg">Sercice charge: {ticket.price}</p>

                                        <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Order now
                                        </button>

                                    </div>

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    )
}

export default Tickets