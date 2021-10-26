import React from 'react';
import Navbar from '../component/Navbar';
import Jumbotron from '../component/home/Jumbotron';
import Contents from '../component/home/Contents';
import Offering from '../component/home/Offering';
import Footer from '../component/home/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Contents />
            <Offering />
            <Footer />
        </>
    )
}

export default Home;