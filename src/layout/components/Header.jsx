import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import config from '../../config';
import { useSelector } from 'react-redux';
import { useAuth } from '../../firebaseConfig';
import { images } from '../../images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const menuRef = useRef()
    const [close, setClose] = useState(false)
    const cart = useSelector((state) => state.handleCart)
    const currentUser = useAuth();
    const [photo, setPhoto] = useState(images.userProfile)
    useEffect(() => {
        if (currentUser && currentUser.photoURL) {
            setPhoto(currentUser.photoURL)
        }
    }, [currentUser]);
    
    const handleHide = () => {
        setClose(true)
        menuRef.current.classList.add("ndv__toggle-menu")
    }
    const handleClose = () => {
        setClose(false)
        menuRef.current.classList.remove("ndv__toggle-menu")
    }
    return (
        <header className="w-full max-w-screen-xl p-6 mx-auto ">
            <nav className="relative flex flex-row items-center justify-between">
                <div className="z-10 text-xl font-semibold text-center cursor-pointer logo basis-1/6">
                    <Link to={config.routes.home}>CoffeeStyle.</Link>
                </div>

                <ul ref={menuRef} id="header-menu" className="z-50 hidden text-sm font-medium tracking-widest text-gray-500 basis-3/6 lg:flex lg:items-center lg:justify-end lg:gap-8">
                    <li className="ndv-top-menu-item">
                        <NavLink to={config.routes.home}>HOME</NavLink>
                    </li>
                    <li className="ndv-top-menu-item">
                        <NavLink to={config.routes.products}>PRODUCTS</NavLink>
                    </li>

                    <li className="ndv-top-menu-item">
                        <NavLink to={config.routes.about}>ABOUT</NavLink>
                    </li>
                    <li className="ndv-top-menu-item">
                        <NavLink to={config.routes.contact}>CONTACT</NavLink>
                    </li>
                    <li className="ndv-top-menu-item">
                        <NavLink to={config.routes.blog}>BLOG</NavLink>
                    </li>
                    <li className="ndv-top-menu-item lg:hidden">
                        <NavLink to={config.routes.profile}>PROFILE</NavLink>
                    </li>
                </ul>

                <Link to={config.routes.cart}>
                    <div className="z-10 flex items-center justify-end ml-16 text-sm font-medium text-gray-500 uppercase shopping basis-3/6 lg:basis-1/6 lg:justify-start">
                        <div className="flex items-center cart ndv-top-menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ndv-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            <span className="mx-2">cart</span>
                            <span className="text-white bg-gray-500 ndv-badge-circle ">{cart.length}</span>
                        </div>

                    </div>
                </Link>

                <div className="flex items-center justify-end cursor-pointer gap-x-3 basis-1/6 lg:ml-4">
                    <div className='sm:hidden'>
                        <Link to={config.routes.profile}>
                            <img src={photo} alt="user_img" className='rounded-full w-[36px] h-[36px] ndv__img' />
                        </Link>
                    </div>
                    {!close && (
                        <div className='lg:hidden' onClick={() => handleHide()}>
                            <svg id="toggle-header-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ndv-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    )}
                    {
                        close && (
                            <div className='w-4 mt-1 text-lg lg:hidden' onClick={() => handleClose()}>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        )
                    }
                </div>

            </nav>
        </header>
    );
}

export default Header;
