import React, { useEffect, useState } from 'react';
import productApi from '../service/productApi';
import ProductsList from '../components/ProductsList';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Subcribe from '../components/Subcribe';
import AOS from "aos";
import "aos/dist/aos.css";
const Loading = () => {
    return (
        <div>
            <SkeletonTheme baseColor="gray" highlightColor="#b8b5b5">
                <div className="mt-100px w-[75%] lg:w-[64%] mx-auto lg:grid lg:grid-cols-3 lg:gap-3 grid gap-y-28 grid-cols-2 sm:grid-cols-1 gap-x-8">
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
const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(products)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    useEffect(() => {
        setLoading(true)
        const productsList = async () => {
            setLoading(true)
            const res = await productApi()
            setProducts(res)
            setFilter(res)
            setLoading(false)
        }
        productsList()
    }, []);
    
    const productFilter = (item) => {
        const updateList = products.filter((product) => {
            return product.category === item
        })
        setFilter(updateList)
    }
    return (
        <div>
            {
                loading ? <Loading /> : (
                    <div>
                        <section className="text-center wrapper" data-aos="fade-down">
                            <h1 className='text-4xl'>Our Products</h1>
                            <p className='text-lg text-gray-500 my-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className='flex justify-center gap-x-4 sm:gap-x-0'>
                                <button onClick={()=>setFilter(products)} className='ndv__btn-second'>ALL PRODUCTS</button>
                                <button onClick={()=>productFilter("Coffee Mugs")} className='ndv__btn-second'>COFFEE MUGS</button>
                                <button onClick={()=>productFilter("Others")} className='ndv__btn-second'>OTHERS</button>
                                <button onClick={()=>productFilter("Premium")} className='ndv__btn-second'>PREMIUM</button>
                                <button onClick={()=>productFilter("Tea Mugs")} className='ndv__btn-second'>TEA MUGS</button>
                            </div>
                        </section>
                        <ProductsList products={filter} />
                        <Subcribe/>
                    </div>
                )
            }
        </div>
    );
}

export default Products;
