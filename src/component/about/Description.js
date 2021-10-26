import React from 'react';
import Footer from '../home/Footer';
import Offering from '../home/Offering';
import './Description.css';

function Description() {
    return (
        <>
            <div className='row c'>
                <h1 className='title-contents title-about'>About Us</h1>
            </div>
            <div className='row'>
                <p className='sub-desc' data-aos='fade-up'>People know me as Mr Claude, and I take great pleasure in welcoming you to my café.</p>
            </div>
            <div className='row row-desc'>
                <div className='col-5 col-description'>
                    <p className='sub-' data-aos='fade-up'>I grew up right here in Brisbane… My parents, on the other hand, come from a picturesque and bustling little town in Italy. I was introduced to the sophisticated Italian coffee culture at a very young age thanks to my father’s constant ramblings about how ‘good’ coffee should taste. After all these years, I certainly live up to the “like father, like son” stereotype.</p>
                </div>
                <div className='col-5 col-description'>
                    <p className='sub-' data-aos='fade-up'>I grew up right here in Brisbane… My parents, on the other hand, come from a picturesque and bustling little town in Italy. I was introduced to the sophisticated Italian coffee culture at a very young age thanks to my father’s constant ramblings about how ‘good’ coffee should taste. After all these years, I certainly live up to the “like father, like son” stereotype.</p>
                </div>

            </div>
            <Offering />
            <Footer />
        </>
    )
}

export default Description;