import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{ height: "20vh" }} className='w-100 bg-dark d-flex justify-content-center align-items-center'>

            <div className='text-light'>Copyright<span className='text-info'> <FaCopyright></FaCopyright></span> 2050 Skill Share It Institute. All Right Reserved|| <span className='text-info'>Cikago</span></div>
        </div>
    );
};

export default Footer;