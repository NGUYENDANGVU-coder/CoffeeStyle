import React from 'react';
import { images } from '../images/images';
import MemberList from '../components/MemberList';
import Subcribe from '../components/Subcribe';
import TimeLine from '../components/TimeLine';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            <div className="text-center wrapper">
                <div className='text-center'>
                    <h1 className='text-4xl'>About</h1>
                    <p className='text-lg text-gray-500 my-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <img className='h-[350px] my-[80px] w-full ndv__img' src={images.aboutImg} alt="about" />
                </div>
                <div data-aos="fade-down">
                    <h2 className='text-xs font-bold tracking-widest text-gray-500'>INTRODUCTIONS</h2>
                    <h1 className='text-3xl mt-7 w-[70%] m-auto'>Overlaid the jeepers uselessly much excluding everyday life.</h1>
                    <p className='text-gray-500 text-md my-7 '>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                </div>
                <div className='flex my-[80px] text-left sm:flex-wrap' data-aos="fade-right" data-aos-duration="1000">
                    <img src={images.about3} className='w-[460px] h-[380px] ndv__img shrink-0' alt="about_Img" />
                    <div className='my-auto ml-16 sm:ml-0 sm:text-center'>
                        <h1 className='m-auto text-2xl mt-7'>Overlaid the jeepers uselessly much excluding everyday life.</h1>
                        <p className='text-gray-500 text-md my-7 '>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </div>
                </div>
                <div className='flex my-[80px] text-left flex-row-reverse sm:flex-col' data-aos="fade-left" data-aos-duration="1000">
                    <img src={images.about4} className='w-[460px] h-[380px] ndv__img shrink-0 ml-16 sm:ml-0' alt="about_Img" />
                    <div className='my-auto sm:text-center'>
                        <h1 className='m-auto text-2xl mt-7'>Overlaid the jeepers uselessly much excluding everyday life.</h1>
                        <p className='text-gray-500 text-md my-7 '>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </div>
                </div>
                <h2 className='text-xs font-bold tracking-widest text-gray-500'>MEMBERS</h2>
                <MemberList />
                {/* Parallax */}
                <div className="my-[80px] bg-[url('./images/parallax2.jpg')] lg:h-[350px] h-[250px] bg-cover bg-fixed bg-center w-[100vw] relative left-[calc(-50vw+50%)]" data-aos="fade-up" data-aos-duration="1000">
                </div>
                <h2 className='text-xs font-bold tracking-widest text-gray-500'>HISTORY TIMELINE</h2>
                <TimeLine />
            </div>

            <Subcribe />
        </div>
    );
}

export default About;
