import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './header/Header'
import Navbar from './header/Navbar'
import Loading from '../components/Loading'

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <div className='bg-base-200 px-3'>
                <Header />
            </div>

            <div className='container mx-auto bg-white'>
                <Navbar />
            </div>

            {
                navigation.state === "loading" ? <Loading /> :
                    <Outlet />
            }

        </div>
    )
}

export default MainLayout