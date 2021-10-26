import React from "react";
import './ContactUs.css';
import Image from '../Image';

function ContactUs() {
    return (
        <>
            <div className='row'>
                <h1 className='title-contact title-contents'>Contact Us</h1>
            </div>
            <div className='container'>
                <div className='row row-contact'>
                    <div className='col-7 col-contact'>
                        <p className='sub-cont' data-aos='fade-up'>
                            Offering both rejuvenation and a reprieve from bustling Creek Street, Mr Claude is here to welcome you to our stylish and chic, European-inspired café under the iconic fig tree in Brisbane’s CBD.
                            Offering both rejuvenation and a reprieve from bustling Creek Street, Mr Claude is here to welcome you to our stylish and chic, European-inspired café under the iconic fig tree in Brisbane’s CBD.
                        </p>
                        <br />
                        <p className='sub-cont' data-aos='fade-up'>
                            Offering both rejuvenation and a reprieve from bustling Creek Street, Mr Claude is here to welcome you to our stylish and chic, European-inspired café under the iconic fig tree in Brisbane’s CBD.
                            Offering both rejuvenation and a reprieve from bustling Creek Street, Mr Claude is here to welcome you to our stylish and chic, European-inspired café under the iconic fig tree in Brisbane’s CBD.
                        </p>
                    </div>
                    <div className='col-5 col-contact'>
                        <h4> MR.CLAUDE </h4>
                        <p className='desc-h4' data-aos='fade-up'>
                            12 Creek Street, Brisbane CBD
                        </p>
                        <h4> Opening hours </h4>
                        <p className='desc-h4' data-aos='fade-up'>
                            Monday - Friday 7:00am - 4:00pm
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactUs;