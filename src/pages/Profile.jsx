import { updateProfile } from 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { auth, logout, upload, useAuth } from '../firebaseConfig';
import { images } from '../images/images';
const Profile = () => {
    const currentUser = useAuth();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [photo, setPhoto] = useState(null)
    const [inputName, setInputName] = useState('')
    const nameRef=useRef();
    const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png')
    const handleLogout = async () => {
        try {
            await logout();
            localStorage.removeItem('token');
            navigate('/signin')
        } catch (error) {
            console.log(error);
        }
    }
    const handleChangeAvt = () => {
        setShow(true)
        try {
            upload(photo, currentUser)
            toast.success('Cập nhật thành công, hãy load lại trang')
        } catch (error) {
            console.log(error);
        }
    }
    const handleChoice = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }
    const handleChangeName = (e) => {
        setInputName(e.target.value)
    }
    const db = getFirestore();

    const handleUpdateName = async() => {
        await updateProfile(currentUser, {
            displayName: inputName
        });
        toast.success('Cập nhật thành công, hãy load lại trang')
    }
    const user = auth.currentUser;
        if (user !== null) {
            user.providerData.forEach((profile) => {
              if(profile.displayName){
                
                try {
                    nameRef.current.textContent='Your Name: '+profile.displayName;
                } catch (error) {
                    console.log(error);
                }
              }
              
            });
          }
    useEffect(() => {
        if (currentUser && currentUser.photoURL) {
            setPhotoURL(currentUser.photoURL)
        }
    }, [currentUser]);
    return (
        <div className='flex flex-col mt-5 border shadow-retangle_shadow'>
            <div className='mx-auto text-center w-[30%]'>
                <img className='object-cover object-center w-32 h-32 mx-auto mb-4 rounded-full' alt='avatar_Profile' src={photoURL}></img>
                <button onClick={handleChangeAvt} className='ndv__button'>Change your profile</button>
                {
                    show && (
                        <input accept='image/*' type='file' onChange={handleChoice}></input>
                    )
                }
                <div className='flex items-center justify-center my-3'>
                    <h2 className='text-text__color-second'>Xin chào {currentUser?.email}</h2>
                    <img className='w-8' src={images.loveGif} alt="loveGif" />
                </div>
            </div>
            <div className='ml-5'>
                <h1 className='text-xl font-semibold'>Account information</h1>
                <div className='py-5'>
                    <p>Email</p>
                    <p>{currentUser?.email}</p>
                </div>
                <div className='pb-5'>
                    <p>Password</p>
                    <p>****</p>
                </div>
                <div className='pb-5'>
                    <p>Full Name</p>
                    <input type="text" className='w-[50%]' value={inputName} ref={nameRef} onChange={handleChangeName} placeholder='Enter to change your name'/>
                    <p type="text" ref={nameRef} className='my-4'>* You have not entered your name</p>
                    <button className='w-20 h-8 text-white bg-black' onClick={handleUpdateName}>Change</button>
                </div>
                <button className='mt-4 ndv__button sm:translate-x-[-3%]' onClick={handleLogout}>Log Out</button>
            </div>
            <ToastContainer />
        </div>

    );
}

export default Profile;
