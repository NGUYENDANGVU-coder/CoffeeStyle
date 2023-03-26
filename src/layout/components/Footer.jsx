import React from 'react';
import { images } from '../../images/images';

const Footer = () => {
    return (
        <div>
            <footer className='mb-[20px] mt-[50px]'  >
                <div className="text-xl font-semibold text-center cursor-pointer logo">
                    CoffeeStyle.
                </div>
                <p className="text-sm my-[40px] text-center">Delivering the best coffee life since 1996. From coffee geeks to the real ones.</p>
                <div className="flex items-center justify-center">
                    <span>Dang Vu 2001</span>
                    <span>
                        <img src={images.loveGif} className='w-7' alt='love'></img>                   
                    </span>
                </div>
            </footer>    
        </div>
    );
}

export default Footer;
