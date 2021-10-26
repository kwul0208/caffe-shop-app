import React from 'react';
import './Offering.css';
import Image from '../Image';

function Offering() {
    return (
        <>
            <hr className='long' />
            <div className='row row-long'>
                <h2 className='title-offering' data-aos='fade-up'>JOIN US AND BE ONE OF THE FIRST <br />TO HEAR ABOUT OUR SPECIAL OFFERS AND EVENTS</h2>

            </div>
            <div className='row row-long'>
                <a href="https://web.whatsapp.com/send?phone=6283839178650" target='_blank'> <button className='btn-offering' data-aos='fade-up'>Subcribe</button> </a>
            </div>

            <Image />
            <hr className='long' />
        </>
    )
}

export default Offering;
