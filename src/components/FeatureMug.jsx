import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <div className='flex '>
            <SkeletonTheme baseColor="gray" highlightColor="#b8b5b5">
                <div className="mt-100px lg:w-[65%] mx-auto lg:grid-cols-2 lg:gap-2 grid gap-y-28 md:grid-cols-1">
                    <div>
                        <Skeleton height={540} width={460} />
                    </div>
                    <div>
                        <Skeleton height={540} width={460} />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}
const FeatureMug = ({ product, loading }) => {

    return (
        <section className="block w-full products max-w-screen-2xl mb-100px sm:mb-0" data-aos="fade-up">
            <div className="ndv-subheadline-decor">
                <div className="w-8 h-[1px] bg-gray-400"></div>
                <div className="mx-4">
                    <h2 className='tracking-widest'>FEATURED MUGS</h2>
                </div>
                <div className="w-8 h-[1px] bg-gray-400"></div>
            </div>

            {
                loading ? <Loading /> : (
                    <div className="mt-100px lg:w-[65%] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-2 grid gap-y-28 ">
                        {
                            product.map((item, index) => {
                                return (
                                    <div className="relative w-[460px] h-[540px] sm:h-[500px] sm:w-[350px] m-auto " key={index}>
                                        <div className='relative group '>
                                            <Link to={`/products/${item.id}`}>
                                                <div>
                                                    <img className="h-[100%] bg-center ndv__img" src={item.image} alt="img" />
                                                    <div className='absolute top-0 w-full h-full opacity-0 bg-img__overplay group-hover:opacity-100'>
                                                    </div>
                                                </div>
                                                {item.sale && (
                                                    <div className="absolute w-[100px] z-10 bg-white py-2 px-4 top-3 right-3 text-center text-[#a25f4b] text-sm tracking-widest font-bold">
                                                        On Sale
                                                    </div>
                                                )}

                                                <button className="ndv-button absolute z-2 bg-white translate-y-[70%] transition-all opacity-0 group-hover:duration-700 group-hover:translate-y-[0%] duration-600 left-[10%] group-hover:opacity-100 text-[#1d1f2e] ">
                                                    EXPLORE MUG
                                                </button>

                                            </Link>
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
        </section>
    );
}

export default FeatureMug;
