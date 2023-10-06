import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Navbar from './header/Navbar'

const MainLayout = () => {
    return (
        <div>
            <div className='bg-base-200 px-3'>
                <Header />
            </div>

            <div className='container mx-auto bg-white'>
                <Navbar />
            </div>


            <Outlet />
        </div>
    )
}

export default MainLayout