import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import productApi from '../service/productApi';
import FeatureMug from '../components/FeatureMug';
import 'react-loading-skeleton/dist/skeleton.css'
import ProductsList from '../components/ProductsList';
import Subcribe from '../components/Subcribe';
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const productsList = async () => {
            setLoading(true)
            const res = await productApi()
            setProducts(res.slice(5, 14))
            setProduct(res.slice(1, 3))
            setLoading(false)
        }
        productsList()
    }, []);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='overflow-hidden'>
            <section className="slider mx-auto w-[95%] max-w-screen-2xl h-[530px] bg-[url('./images/slider-bg.jpg')] bg-cover bg-no-repeat bg-bottom" >
                <div className="relative w-full h-full">
                    <div className='absolute w-full h-full bg-[#050827] opacity-20 z-1'>

                    </div>
                    <div className="absolute flex flex-col items-center justify-center w-full h-full text-white z-3">
                        <h3 className="text-xs font-bold tracking-widest">BEST PLACE TO BUY DESIGN</h3>
                        <h1 className="my-8 text-5xl">Coffee Mugs</h1>
                        <p className="w-3/5 sm:w-[90%] mb-16 text-lg font-semibold text-center ">The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
                        <button className="text-xs font-extrabold tracking-widest text-black bg-white w-60 h-14 text-opacity-80">
                            <Link to={config.routes.products}>EXPORE OUR PRODUCTS</Link>
                        </button>
                    </div>
                </div>
            </section>
            <section className="story w-full max-w-screen-2xl my-100px m-auto text-center xl:px-[420px] px-16 md:px-32 lg:px-64 sm:px-0" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="font-medium text-2xl mt-5 mb-[15px]">Even the all-powerful Pointing has no control about the blind texts.</h2>
                <p className="leading-7 text-main">It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                <Link href="#" className="mt-[25px] inline-block text-[#a25f4b] border-b-2 border-[#f3b29f] hover:border-[#a25f4b] hover:border-b-3 ease-in-out duration-1000">Read the full Story</Link>
            </section>
            <FeatureMug product={product}  loading={loading}/>
            {/* More Product */}
            <div className="more_product w-full max-w-screen-2xl mb-[100px]">
                <div className="ndv-subheadline-decor">
                    <div className="w-8 h-[1px] bg-gray-400"></div>
                    <div className="mx-4">
                        <h2 className='tracking-widest'>MORE PRODUCTS</h2>
                    </div>
                    <div className="w-8 h-[1px] bg-gray-400"></div>
                </div>
                <ProductsList products={products} loading={loading} />
            </div>
            <div className="wrapper sm:mx-0">
                <div className="ndv-subheadline-decor">
                    <div className="w-8 h-[1px] bg-gray-400"></div>
                    <div className="mx-4">
                        <h2 className='tracking-widest'>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</h2>
                    </div>
                    <div className="w-8 h-[1px] bg-gray-400"></div>
                </div>
                <div className="flex mt-[50px] md:flex-row justify-center items-center gap-5 sm:flex-wrap">
                    <div className="flex w-full h-full gap-5 mb-5 basis-1/2 md:flex md:flex-row md:mb-0 sm:basis-full" data-aos="fade-right">
                        <div className="h-[280px] basis-2/3 xs:mb-5 md:mb-0 bg-[url('./images/magazine-image-01.jpeg')] bg-cover bg-no-repeat bg-center"></div>
                        <div className="flex flex-col gap-3 basis-1/3 xs:gap-5">
                            <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./images/magazine-image-02.jpeg')] bg-cover bg-no-repeat bg-center"></div>
                            <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./images/magazine-image-03.jpeg')] bg-cover bg-no-repeat bg-center"></div>
                        </div>

                    </div>
                    <div className="pl-8 text-left basis-1/2 xl:pl-14 sm:basis-full sm:pl-0 sm:text-center" data-aos="fade-left">
                        <div className="mb-4 text-xs font-medium tracking-widest text-gray-500 uppercase">Premium Offer</div>
                        <div className="mb-4 text-4xl">Get our Coffee Magazine</div>
                        <div className="mb-4 leading-7 text-gray-500">The most versatile furniture system ever created. Designed to fit your life.</div>
                        <Link to='/products' className="px-[24px] py-[18px] mt-4 block text-sm tracking-widest font-bold uppercase bg-gray-900 text-white text-center w-[100%] duration-300 hover:bg-slate-800">Start Shopping</Link>
                    </div>
                </div>
            </div>
            {/* Parallax */}
            <div className=" bg-[url('./images/parallax.jpg')] lg:h-[350px] h-[250px]  bg-cover bg-fixed bg-center w-[100vw] relative left-[calc(-50vw+50%)]" data-aos="fade-up">
            </div>
            <Subcribe/>

        </div>
    );
}

export default Home;
