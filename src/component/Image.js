import React from 'react';
import './Image.css';
import offering1 from '../assets/offering1.jpg';
import offering2 from '../assets/offering2.jpg';
import offering3 from '../assets/offering3.jpg';
import offering4 from '../assets/offering4.jpg';

function Image() {
    return (
        <div className='row'>
            <img src={offering1} className='offering-img' />
            <img src={offering2} className='offering-img' />
            <img src={offering3} className='offering-img' />
            <img src={offering4} className='offering-img' />
            <img src={offering4} className='offering-img' />
        </div>
    )
}

export default Image;