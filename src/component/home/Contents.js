import React, { useState } from 'react';
import './Contents.css';
import Menu from '../../assets/menu.jpg';
import venue from '../../assets/venue.jpg';
import event from '../../assets/event.jpg';
import { Link } from 'react-router-dom';

function Contents() {
    // const [show1, setShow1] = useState(true);
    // const [show2, setShow2] = useState(true);
    // const [show3, setShow3] = useState(true);

    // const scrollScreen = () => {
    //     if (window.innerWidth >= 960) {
    //         if (window.scrollY >= 300 && window.scrollY <= 320) {
    //             setShow1(false)
    //         } else if (window.scrollY >= 850 && window.scrollY <= 870) {
    //             setShow2(false)
    //         } else if (window.scrollY >= 1200 && window.scrollY <= 1220) {
    //             setShow3(false)
    //         }
    //     } else if (window.innerWidth <= 960 && window.innerWidth >= 560) {
    //         if (window.scrollY >= 180 && window.scrollY <= 200) {
    //             setShow1(false)
    //         } else if (window.scrollY >= 600 && window.scrollY <= 620) {
    //             setShow2(false)
    //         } else if (window.scrollY >= 1000 && window.scrollY <= 1200) {
    //             setShow3(false)
    //         }
    //     } else if (window.innerWidth <= 560) {
    //         if (window.scrollY >= 200 && window.scrollY <= 220) {
    //             setShow1(false)
    //         } else if (window.scrollY >= 750 && window.scrollY <= 770) {
    //             setShow2(false)
    //         } else if (window.scrollY >= 1300 && window.scrollY <= 1320) {
    //             setShow3(false)
    //         }

    //     }
    //     console.log(window.scrollY);
    // }

    // window.addEventListener('scroll', scrollScreen);

    // console.log(show1)



    return (
        <>
            <div className='contents' >
                <div className='row row-contents'>
                    <div className='col-6 col-contents' >
                        <h1 className='title-contents'>Menu</h1>
                        <p className='desc-contents' data-aos='fade-up'>You’ll find our Italian and Australian culture perfectly blended at Mr Claude, where we draw inspiration from both to influence our food and beverage menus. Our signature coffee blend was devised from the essence of Italy and Australia and some of our brunch favourites include smashed avo and Caprese toasties. </p>
                        <Link className='selengkapnya'>Selengkapnya</Link>
                        <hr />
                    </div>
                    <div className='col-6 col-contents'>
                        <img src={Menu} className='img-menu-pc img-menu-1 ' data-aos='fade-up' />
                        {/* <img src={Menu} className={show1 ? 'img-menu img-menu-1 ' : 'img-menu-pc img-menu-1 '} /> */}
                    </div>
                </div>
                <div className='row row-contents'>
                    <div className='col-6 col-contents'>
                        <img src={venue} className='img-menu-pc img-menu-2 ' data-aos='fade-up' />
                        {/* <img src={venue} className={show2 ? 'img-menu img-menu-2 ' : 'img-menu-pc img-menu-2 '} /> */}
                    </div>
                    <div className='col-6 col-contents'>
                        <h1 className='title-contents'>Venue</h1>
                        <p className='desc-contents' data-aos='fade-up'>Offering both rejuvenation and a reprieve from bustling Creek Street, Mr Claude is here to welcome you to our stylish and chic, European-inspired café under the iconic fig tree in Brisbane’s CBD.   Our signature coffee blend was devised from the essence of Italy and Australia and some of our brunch favourites include smashed avo and Caprese toasties. </p>
                        <Link className='selengkapnya'>Selengkapnya</Link>
                        <hr />
                    </div>
                </div>
                <div className='row row-contents'>
                    <div className='col-6 col-contents'>
                        <h1 className='title-contents'>Events</h1>
                        <p className='desc-contents' data-aos='fade-up'>You’ll find our Italian and Australian culture perfectly blended at Mr Claude, where we draw inspiration from both to influence our food and beverage menus. Our signature coffee blend was devised from the essence of Italy and Australia and some of our brunch favourites include smashed avo and Caprese toasties. </p>
                        <Link className='selengkapnya'>Selengkapnya</Link>
                        <hr />
                    </div>
                    <div className='col-6 col-contents'>
                        <img src={event} className='img-menu-pc img-menu-3 ' data-aos='fade-up' />
                        {/* <img src={event} className={show3 ? 'img-menu img-menu-2 ' : 'img-menu-pc img-menu-3 '} /> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contents;