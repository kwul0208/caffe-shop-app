import React, { useState, useEffect } from 'react';
import './Navbar.css';
import navTitle from '../assets/navTitle.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <div className='Navbar'>
            <div className='row row-nav'>
                <div className='col-2 col-logo'>
                    <Link to='/'>  <img src={navTitle} className='navTitle' /></Link>
                    <i class={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
                </div>
                <div className='col-10 col-nav-link'>
                    <ul className={click ? 'ul-nav' : 'ul-nav-off'}>
                        <li className='li-nav'>
                            <Link className='link' to='/'> Home </Link>

                        </li>
                        <li className='li-nav'>
                            <Link className='link' to='/about'> About </Link>
                        </li>
                        <li className='li-nav'>
                            <Link className='link' to='/menu'> Menu </Link>
                        </li>
                        <li className='li-nav'>
                            <Link className='link' to='/contact'> Contact </Link>

                        </li>
                        <li className='li-nav'>
                            <Link className='link' to='/event'> Event </Link>
                        </li>
                        <li className='li-nav'>
                            <a href="https://web.whatsapp.com/send?phone=6283839178650" target='_blank'><button className='btn-booking'>Booking</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}


export default Navbar;