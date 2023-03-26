import React, { useEffect, useState } from 'react';
import aboutApi from '../service/aboutApi';
import AOS from "aos";
import "aos/dist/aos.css";
const MemberList = () => {
    const [member, setMember] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await aboutApi()
            setMember(res[0].member);
        }
        getData()
    }, [])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            <div className='grid grid-flow-col gap-4 auto-cols-fr' data-aos="fade-right" data-aos-duration="1000">
                {
                    member.map((item, index) => {
                        return (
                            <div className='mt-[80px] ' key={index}>
                                <img src={item.image} alt='img_member' className='ndv__img' />
                                <p className='mt-[30px] text-lg mb-[10px]'>{item.name}</p>
                                <p className='text-xs font-bold tracking-widest text-gray-500'>{item.position}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MemberList;

