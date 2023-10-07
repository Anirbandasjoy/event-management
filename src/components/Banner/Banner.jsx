import React from 'react'
import banner1 from '../../assets/banner/7.jpg'
import banner2 from '../../assets/banner/8.jpg'
import banner3 from '../../assets/banner/9.jpg'
import banner4 from '../../assets/banner/10.jpg'
const Banner = () => {
    return (
        <div className='px-2 rounded-sm' data-aos="zoom-in">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full h-[80vh]">
                    <img src={banner1} className="w-full" />
                    <div className='absolute top-[45%] lg:top-[35%]  text-white left-[30%] md:left-[41%] lg:left-[36%] text-center'>
                        <h1 className='lg:text-4xl font-bold'>The Most <br /><span className='text-lime-500'>Special Birthday</span> <br />Event Management</h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[80vh]">
                    <img src={banner2} className="w-full" />
                    <div className='absolute top-[45%] lg:top-[35%]  text-white left-[30%] md:left-[41%] lg:left-[36%] text-center'>
                        <h1 className='lg:text-4xl font-bold'>The Most <br /><span className='text-lime-500'>Special Engagement</span> <br />Event Management</h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[80vh]">
                    <img src={banner3} className="w-full" />

                    <div className='absolute top-[45%] lg:top-[35%]  text-white left-[27%] lg:left-[36%] text-center'>
                        <h1 className='lg:text-4xl font-bold'>The Most <br /><span className='text-lime-500'>Special Anniversaries</span> <br />Event Management</h1>

                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[80vh]">
                    <img src={banner4} className="w-full" />
                    <div className='absolute top-[45%] lg:top-[35%]  text-white left-[30%] md:left-[41%] lg:left-[36%] text-center'>
                        <h1 className='lg:text-4xl font-bold'>The Most <br /><span className='text-lime-500'>Special Retirement</span> <br />Event Management</h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner