import React from 'react';
import './Baner.css';
import baner from '../../assets/music-page/baner.jpg';


function Baner() {
    return (
        <>
            <div className='row'>
                <img src={baner} className='img-baner' />
            </div>
        </>
    )
}

export default Baner;