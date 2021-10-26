import React from 'react';
import './Jumbotron.css';
import jumLogo from '../../assets/jumLogo.png';
import jumLogo2 from '../../assets/jumLogo2.png';
import jumLogo3 from '../../assets/jumLogo3.png';

function Jumbotron() {
    return (
        <div className='jumbotron'>
            <div className='card-jumb'>
                <h1>NGOPI SQUARE JATRA</h1>
                <ul className='ul-jumb'>
                    <li className='li-jumb'><img src={jumLogo} className='jumbLogo' /> </li>
                    <li className='li-jumb'><img src={jumLogo2} className='jumbLogo2' /> </li>
                    <li className='li-jumb'><img src={jumLogo3} className='jumbLogo3' /> </li>
                </ul>
            </div>

        </div>
    )
}

export default Jumbotron;
