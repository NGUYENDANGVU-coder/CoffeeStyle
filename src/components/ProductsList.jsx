import React, { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Loading = () => {
    return (
        <div>
            <SkeletonTheme baseColor="gray" highlightColor="#b8b5b5">
                <div className="mt-100px w-[75%] lg:w-[64%] mx-auto lg:grid lg:grid-cols-3 lg:gap-3 grid gap-y-28 grid-cols-2 gap-x-8">
                    <div>
                        <Skeleton height={380} width={300} />
                    </div>
                    <div>
                        <Skeleton height={380} width={300} />
                    </div>
                    <div>
                        <Skeleton height={380} width={300} />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}
const ProductsList = ({ products, loading }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      const handleScroll = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    return (
        <div>
            {
                loading ? <Loading /> : (
                    <div className="mt-100px  w-[75%] lg:w-[64%] mx-auto lg:grid lg:grid-cols-3 lg:gap-x-3 grid gap-y-10 sm:grid-cols-1 grid-cols-2 gap-x-8" >
                        {
                            products.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="relative m-auto " data-aos="fade-up" data-aos-duration="1000">
                                            <div className='relative group ' onClick={()=>handleScroll()}>
                                                <NavLink to={`/products/${item.id}`}>
                                                    <div className='h-[380px]' >
                                                        <img className="h-[100%] bg-center ndv__img" src={item.image} alt="img" />
                                                        <div className='absolute top-0 w-full h-full opacity-0 bg-img__overplay group-hover:opacity-100'>
                                                        </div>
                                                    </div>
                                                    {item.sale && (
                                                        <div className="absolute w-[100px] z-10 bg-white py-2 px-4 top-3 right-3 text-[#a25f4b] text-sm tracking-widest font-bold">
                                                            On Sale
                                                        </div>
                                                    )}

                                                    <button className="ndv-button absolute z-2 bg-white translate-y-[70%] transition-all opacity-0 group-hover:duration-700 group-hover:translate-y-[0%] duration-600 left-[10%] group-hover:opacity-100 text-[#1d1f2e] ">
                                                        EXPLORE MUG
                                                    </button>

                                                </NavLink>
                                            </div>

                                        </div>
                                        <div className="mt-[25px] mb-[20px] text-center">
                                            <p className="ndv-name-product">{item.name}</p>
                                            {
                                                item.sale ? (<div>
                                                    <span className="text-lg font-bold text-color-second">$ {item.priceOnSale} USD</span>
                                                    <span className="ml-2 line-through text-main">$ {item.price} USD</span>
                                                </div>) : (<p className="text-main">$ {item.price} USD</p>)
                                            }
                                            
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}

export default ProductsList;
