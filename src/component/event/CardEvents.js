import React from 'react';
import './CardEvent.css';

import img1 from '../../assets/music-page/img1.jpg';
import img2 from '../../assets/music-page/img2.jpg';
import img3 from '../../assets/music-page/img3.jpg';
import img4 from '../../assets/music-page/img4.jpg';

function CardEvent() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='title-event'>Event</h1>
                </div>
                <div className='row row-event'>
                    <div className='col-3 col-event'>
                        <div className='card-event'>
                            <img src={img1} data-aos='fade-up' className='img-card-event' />
                            <p data-aos='fade-up' className='desc-img-e'>Event musik buat kamu <i class="fa fa-play"></i> <br /> Musik</p>
                            <h4 data-aos='fade-up' className='title-card-e'>KARAOKE COMPETITION</h4>
                            <p data-aos='fade-up' className='time'>Starting from</p>
                            <p data-aos='fade-up' className='price'>RP55.000</p>
                            <p data-aos='fade-up' className='time'><i class="far fa-clock"></i> 16:00 - 22:00</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-calendar"></i>  3 Desember 2021</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-map-marker-alt"></i> Punno Caffe</p>
                        </div>
                    </div>
                    <div className='col-3 col-event'>
                        <div className='card-event'>
                            <img src={img1} data-aos='fade-up' className='img-card-event' />
                            <p data-aos='fade-up' className='desc-img-e'>Event musik buat kamu <i class="fa fa-play"></i> <br /> Musik</p>
                            <h4 data-aos='fade-up' className='title-card-e'>KARAOKE COMPETITION</h4>
                            <p data-aos='fade-up' className='time'>Starting from</p>
                            <p data-aos='fade-up' className='price'>RP55.000</p>
                            <p data-aos='fade-up' className='time'><i class="far fa-clock"></i> 16:00 - 22:00</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-calendar"></i>  3 Desember 2021</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-map-marker-alt"></i> Punno Caffe</p>
                        </div>
                    </div>
                    <div className='col-3 col-event'>
                        <div className='card-event'>
                            <img src={img1} data-aos='fade-up' className='img-card-event' />
                            <p data-aos='fade-up' className='desc-img-e'>Event musik buat kamu <i class="fa fa-play"></i> <br /> Musik</p>
                            <h4 data-aos='fade-up' className='title-card-e'>KARAOKE COMPETITION</h4>
                            <p data-aos='fade-up' className='time'>Starting from</p>
                            <p data-aos='fade-up' className='price'>RP55.000</p>
                            <p data-aos='fade-up' className='time'><i class="far fa-clock"></i> 16:00 - 22:00</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-calendar"></i>  3 Desember 2021</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-map-marker-alt"></i> Punno Caffe</p>
                        </div>
                    </div>
                    <div className='col-3 col-event'>
                        <div className='card-event'>
                            <img src={img1} data-aos='fade-up' className='img-card-event' />
                            <p data-aos='fade-up' className='desc-img-e'>Event musik buat kamu <i class="fa fa-play"></i> <br /> Musik</p>
                            <h4 data-aos='fade-up' className='title-card-e'>KARAOKE COMPETITION</h4>
                            <p data-aos='fade-up' className='time'>Starting from</p>
                            <p data-aos='fade-up' className='price'>RP55.000</p>
                            <p data-aos='fade-up' className='time'><i class="far fa-clock"></i> 16:00 - 22:00</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-calendar"></i>  3 Desember 2021</p>
                            <p data-aos='fade-up' className='time'><i class="fa fa-map-marker-alt"></i> Punno Caffe</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardEvent;