import React, { useContext } from 'react'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/services/Services'
import { AuthContext } from '../../context/AuthProvider'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Footer />
        </div>
    )
}

export default Home