import React from 'react';
import MakeAdmin from '../../DashBoard/MakeAdmin/MakeAdmin';
import Upcoming from '../../Upcoming/Upcoming';
import Allreviews from '../Allreviews/Allreviews';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Upcoming></Upcoming>
            <Allreviews></Allreviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;