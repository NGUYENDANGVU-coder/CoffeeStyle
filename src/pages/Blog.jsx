import React from 'react';
import BlogItem from '../components/BlogItem';
import { Link } from 'react-router-dom';
import config from '../config';
import MemberList from '../components/MemberList';
import Subcribe from '../components/Subcribe';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Blog = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const blogs = [
        {
            image: 'https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a481bece02f_Blog%20Pic%20Head%201.jpg',
            title: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
            infor: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "OCTOBER 12, 2018",
            link: "https://coffeestyle-template.webflow.io/post/coffeestylepost3"
        },
        {
            image: 'https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a3042ece037_Blog%20Pic%20Head%207.jpg',
            title: "More coffee, lower death risk?",
            infor: "Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p",
            date: "JUNE 9, 2018",
            link: "https://coffeestyle-template.webflow.io/post/coffeestylepost4"
        },
        {
            image: 'https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg',
            title: "Health Check: why do I get a headache when I had my coffee?",
            infor: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "OCTOBER 1, 2018",
            link: "https://coffeestyle-template.webflow.io/post/coffeestylepost1"
        },
        {
            image: 'https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg',
            title: "Will drinking coffee prolong your life?",
            infor: "Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. ",
            date: "JULY 10, 2019",
            link: "https://coffeestyle-template.webflow.io/post/coffeestylepost5"
        },
        {
            image: 'https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8fd5ece039_Blog%20Head%20Pic%2010.jpg',
            title: "How long does a cup of coffee keep you awake?",
            infor: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
            date: "MAY 1, 2022",
            link: "https://coffeestyle-template.webflow.io/post/coffeestylepost2"
        },
    ]

    return (
        
        <>
            <div className='wrapper'>
                <div className='text-center'>
                    <h1 className='text-4xl'>Read coffee stories on our Blog</h1>
                    <p className='text-lg text-gray-500 my-7 w-[60%] mx-auto sm:w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

                </div>
                <div className='flex sm:flex-col md:flex-col md:text-center md:flex-wrap'>
                    <div className='basis-4/6'>
                        <h2 className='ndv__title'>Latest Posts</h2>
                        {
                            blogs.map((blog, index) => {
                                return (
                                    <BlogItem blog={blog} key={index} />
                                )
                            })
                        }
                    </div>
                    <div className='basis-2/6 sm:text-center'>
                        <h2 className='ndv__title'>About Us</h2>
                        <Link to={config.routes.home} className='text-xl font-semibold text-center cursor-pointer'>CoffeeStyle.</Link>
                        <p className='my-5 text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                        <Link to={config.routes.about}>
                            <p className='sm:translate-x-2/4 md:translate-x-2/4 border-b-[1px] pb-2 hover:font-bold hover:border-color-second hover:duration-100 hover:ease-linear hover:transition-all  w-[50%] text-center border-light-coffee text-color-second hover:cursor-pointer'>Read the full Story</p>
                        </Link>
                        <h2 className='ndv__title'>Authors</h2>
                        <MemberList />
                    </div>
                </div>
                <div className='mt-[80px]  mx-auto text-center text-color-second text-xl border-b-2 border-light-coffee border-l-2' data-aos="fade-up">
                    <p className='p-8'>"I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, Remember how good this is. Because you can lose it."</p>
                </div>
                <p className='mt-8 text-sm font-bold text-center text-gray-500' data-aos-delay="100" data-aos="fade-up">NGUYEN DANG VU - OWNER OF COFFEESTYLE</p>

            </div>
            <Subcribe />
        </>
    );
}

export default Blog;

