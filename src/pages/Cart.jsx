import React from 'react';
import { images } from '../images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Subcribe from '../components/Subcribe';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, removeProduct } from '../redux/action';
import { Link } from 'react-router-dom';
import config from '../config';
const Cart = () => {
    const cart = useSelector((state) => state.handleCart)
    console.log(cart);
    
    const totalPrice=cart.reduce((sum,item)=>{
        let price = 0
        if(item.sale===true){
            price=item.priceOnSale
        }else{
            price=item.price
        }
        return sum+parseFloat(price)
    },0)
    const dispatch = useDispatch()
    const handleAdd = (product) => {
        dispatch(addProduct(product))
    }
    const handleDel = (product) => {
        dispatch(deleteProduct(product))
    }
    const handleRemove = (product) => {
        dispatch(removeProduct(product))
    }
    const EmptyCart = () => {
        return (
            <div className='text-center wrapper'>
                <img src={images.emptyCart} alt="emptyCart" className='ndv__img w-[60%] mx-auto' />
                <div>
                    <div className='flex items-center justify-center gap-x-3'>
                        <p>Looks like you have not added anything to your cart.</p>
                        <img src={images.sadGif} alt="sad" width={30} />
                    </div>
                    <Link to={config.routes.products}>
                        <button className='mt-5 text-base text-white bg-black ndv-button'>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        );
    }
    const CartList = () => {

        return (
            <div>
                <div className='w-full px-16 m-auto sm:px-0 max-w-screen-2xl my-100px md:px-32 '>
                    <h1 className='text-4xl text-center'>My Cart</h1>
                    <div className='flex mt-20 text-sm font-bold text-center text-gray-600 sm:hidden'>
                        <div className='basis-5/12'>
                            <p >PRODUCT</p>
                        </div>
                        <div className='basis-2/12'>
                            <p >PRICE</p>
                        </div>
                        <div className='basis-2/12'><p >QTY</p></div>
                        <div className='basis-2/12'><p >TOTAL</p></div>

                    </div>
                    {
                        cart.map((product, index) => {
                            const price = product.sale ? product.priceOnSale : product.price
                            return (
                                <div className='flex items-center my-10 text-center sm:flex-col sm:justify-center' key={index} >
                                    <div className='flex flex-wrap items-center gap-x-6 basis-5/12 sm:flex-wrap'>
                                        <img src={product.image} alt="cart-item" className='ndv__img w-[170px] sm:w-full' />
                                        <div className="text-left sm:w-full sm:text-center">
                                            <h3 className='text-lg font-bold text-black'>{product.name}</h3>
                                            <p className='my-3'>{product.category}</p>
                                            <div className='flex items-center gap-x-2 sm:justify-center'>
                                                <p>Lenght(in): {product.lenght}</p>
                                                <p className='mb-4 text-3xl'>.</p>
                                                <p>Weight(in): {product.weight}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='font-bold basis-2/12'>${price}</div>
                                    <div className='flex justify-center text-lg gap-x-8 basis-2/12 sm:my-3'>
                                        <div >
                                            <button className='w-16 hover:outline outline-[1px]' onClick={() => handleDel(product)}>-</button>
                                        </div>
                                        <div>
                                            <p className='font-bold'>{product.qty}</p>
                                        </div>
                                        <div>
                                            <button className='w-16 hover:outline outline-[1px]' onClick={() => handleAdd(product)}>+</button>
                                        </div>
                                    </div>
                                    <div className='font-bold basis-2/12'>
                                        <p>${(product.qty * price).toFixed(2)}</p>
                                    </div>
                                    <div className='basis-1/12 sm:mt-4'>
                                        <button className='w-16 hover:outline outline-[1px] sm:bg-black sm:text-white' onClick={() => handleRemove(product)}>X</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='flex flex-col items-end'>
                        <div className='w-[20%] h-1 bg-black'></div>
                        <div className='mt-10'>
                            <div className='text-lg font-bold text-gray-700'>SUBTOTAL
                                <span className='ml-4 text-4xl text-black'>${totalPrice.toFixed(2)}</span>
                            </div>

                        </div>
                        <div className='flex flex-row items-center justify-center mt-10 bg-black cursor-pointer gap-x-4 ndv__button'>
                            <button >CHECKOUT</button>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
                <Subcribe />
            </div>
        )
    }
    return (
        <div>
            {
                cart.length === 0 && <EmptyCart />
            }
            {
                cart.length !== 0 && <CartList />
            }
        </div>
    );
}

export default Cart;
