import Banner from '../../components/Banner/Banner'
import Services from '../../components/services/Services'
import Footer from '../../components/Footer'
import TotalEventer from '../../components/TotalEventer'
import Testomonial from '../../components/Testomonial'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <TotalEventer />
            <Testomonial />
            <Footer />
        </div>
    )
}

export default Home