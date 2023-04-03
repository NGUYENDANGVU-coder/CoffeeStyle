import React from 'react';
import { images } from '../images/images';
import { Link } from 'react-router-dom';
import config from '../config';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/action';
import { ToastContainer, toast } from 'react-toastify';

const ProductItem = ({ product }) => {
    const cart = useSelector((state)=>state.handleCart)
    const dispatch =useDispatch();
    const addCart = (product)=>{
        toast.success("Đặt hàng thành công")
        dispatch(addProduct(product))
    }
    return (
        <div>
            <div className='flex items-center gap-x-12 sm:flex-wrap sm:text-center md:flex-wrap md:justify-between md:gap-0'>
                <img src={product.image} alt="product" className='ndv__img w-[460px] h-[460px]' />
                <div className="sm:mt-8">
                    <h2 className='text-4xl'>{product.name}</h2>
                    <p className='my-6 text-lg text-gray-600'>
                        {product.title}
                    </p>
                    {
                        product.sale ? (<div className='mb-4'>
                            <span className='text-3xl text-color-second'>$ {product.priceOnSale} USD</span>
                            <span className='ml-3 text-base text-gray-600 line-through'>$ {product.price} USD</span>
                        </div>) : (<p className="text-main">$ {product.price} USD</p>)
                    }
                    <button className='px-10 mt-4 py-[15px] text-white bg-gray-900 text-sm font-bold' onClick={()=>{addCart(product)}}>ADD TO CART</button>
                    <Link to={config.routes.cart}>
                        <button className='px-10 py-[15px] ml-4 text-white bg-gray-900 text-sm font-bold'>GO TO CART</button>
                    </Link>
                </div>
            </div>
            <div className='flex my-[100px] sm:flex-wrap sm:text-center'>
                <div className='lg:w-[50%]'>
                    <p className='mb-6 text-xs font-bold tracking-widest '>DETAIL</p>
                    <p className='text-gray-500'>{product.detail}</p>
                </div>
                <div className='ml-12 sm:w-full sm:ml-0 sm:mt-8'>
                    <p className='mb-6 text-xs font-bold tracking-widest '>DIMENSIONS</p>
                    <ul className='text-gray-500'>
                        <li>Lenght (in):<span className='text-black'> {product.lenght}</span></li>
                        <li>Height (in):<span className='text-black'> {product.hight}</span></li>
                        <li>Width (in):<span className='text-black'> {product.width}</span></li>
                        <li>Weight (oz):<span className='text-black'> {product.weight}</span></li>
                    </ul>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default ProductItem;
