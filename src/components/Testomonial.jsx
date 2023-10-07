import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';



const Testomonial = () => {
    const [team, setTeam] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get("./team.json");
        setTeam(data)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='mb-40 my-10 '>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold text-red-300 text-center my-6 ' data-aos="zoom-in" >Our Team</h1>
                <p className='text-gray-500' data-aos="zoom-in">These are all our team members. Our team members will handle everything for your event.</p>
            </div>

            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        team.map((member) => (
                            <SwiperSlide key={member.id} >
                                <div className='relative member w-[300px] h-[500px]'>
                                    <img src={member.image} className='w-full h-full' />
                                    <div className='ov image flex items-center justify-center absolute top-0 duration-300 w-full h-full'>
                                        <div className='mt-28'>
                                            <div className='text-white social flex items-center justify-center gap-5'>
                                                <li><AiFillFacebook size={30} /></li>
                                                <li><AiFillLinkedin size={30} /></li>
                                                <li><AiOutlineInstagram size={30} /></li>
                                                <li><AiFillTwitterCircle size={30} /></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
        </div>
    );
}

export default Testomonial