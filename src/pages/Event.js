import React from 'react';
import Baner from '../component/event/Baner';
import CardEvent from '../component/event/CardEvents';
import Offering from '../component/home/Offering'
import Footer from '../component/home/Footer'

function Event() {
    return (
        <>
            <Baner />
            <CardEvent />
            <Offering />
            <Footer />
        </>
    )
}

export default Event;