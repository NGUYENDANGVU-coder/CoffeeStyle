import React, { useEffect, useState } from 'react';
import aboutApi from '../service/aboutApi';
import AOS from "aos";
import "aos/dist/aos.css";
const TimeLine = () => {
    const [date, setDate] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await aboutApi()
            setDate(res[0].timeline)
        }
        getData()
    }, [])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            {
                date.map((item, index) => {
                    return (
                        <div className='mt-[40px]' key={index} data-aos="fade-up" data-aos-delay="50">
                            <h2 className='text-xs font-bold tracking-widest text-gray-500'>{item.date}</h2>
                            <h1 className='text-lg mt-3 w-[70%] m-auto'>{item.title}</h1>
                            <p className='text-gray-500 text-md my-7 w-[60%] sm:w-[85%] mx-auto'>{item.information}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TimeLine;
