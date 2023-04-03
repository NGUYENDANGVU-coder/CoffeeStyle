import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const BlogItem = ({ blog }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <a href={blog.link}>
            <div className='flex w-[90%] justify-around mb-10 items-center sm:flex-col sm:w-full' data-aos="fade-up" data-aos-delay="50">
                <img src={blog.image} alt="blog" className='ndv__img w-[260px] h-[200px] shrink-0 sm:w-[340px]' />
                <div className='ml-8 text-left sm:ml-0 sm:text-center sm:mt-3'>
                    <h3 className='text-lg hover:text-color-second'>{blog.title}</h3>
                    <p className='my-5 text-gray-500'>{blog.infor}</p>
                    <p className='text-sm font-bold text-gray-700'>{blog.date}</p>
                </div>
            </div>
        </a>
    );
}

export default BlogItem;
