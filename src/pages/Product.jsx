import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { images } from '../images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLightbulb } from '@fortawesome/fontawesome-free-solid';
import Subcribe from '../components/Subcribe';
import productApi from '../service/productApi';
import productItemApi from '../service/productItemApi';
import { useParams } from 'react-router-dom';
import ProductsList from '../components/ProductsList';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            const res = await productItemApi(id)
            setProduct(res)
        }
        getProduct();
    }, [id])
    const [products, setProducts] = useState([])
    useEffect(() => {
        const productsList = async () => {
            const res = await productApi()
            setProducts(res)
        }
        productsList()
    }, []);
    const similarItem = products.filter((item)=>{
        return item.category === product.category 
    })
    return (
        <div>
            <div className='wrapper'>
                <ProductItem product={product} />
            </div>
            <div className='flex sm:flex-wrap'>
                <img src={images.productSlide} alt="slide" className='w-[50%] h-[450px] ndv__img sm:w-full' />
                <div className='p-[70px] bg-[#1d1f2e] text-white sm:text-center'>
                    <h2 className='text-2xl'>Handmade by CoffeeStyle.</h2>
                    <p className='w-[60%] my-6 text-lg sm:w-full'>The most versatile furniture system ever created. Designed to fit your life.</p>
                    <div className='flex items-center mb-5 sm:flex-wrap sm:justify-center'>
                        <FontAwesomeIcon icon={faGlobe} className='text-2xl' />
                        <div className='ml-4'>
                            <p>Premium Quality</p>
                            <p className='w-[70%] text-[#bfbabab3] sm:w-full sm:mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</p>
                        </div>

                    </div>
                    <div className='flex items-center sm:flex-wrap sm:justify-center'>
                        <FontAwesomeIcon icon={faLightbulb} className='text-2xl' />
                        <div className='ml-4'>
                            <p>Gentle to the Environment</p>
                            <p className='w-[70%] text-[#bfbabab3] sm:w-full sm:mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='mt-[100px]'>
                <h2 className='text-xs font-bold tracking-widest text-center text-gray-500'>YOU MIGHT ALSO LIKE THESE</h2>
            </div>
            <div className=''>
                <ProductsList products={similarItem}/>
            </div>
            <Subcribe />
        </div>
    );
}

export default Product;
