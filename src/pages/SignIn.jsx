import { faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useRef, useState } from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signin } from '../firebaseConfig';
const SignIn = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passRef = useRef();
    const showRef = useRef();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const hanldeSignIn = async () => {
        setLoading(true)
        try {
            await signin(emailRef.current.value, passRef.current.value);
            toast.success('Đăng nhập thành công');
            setTimeout(() => {
                navigate('/home')
            }, 1000)
            const user = firebase.auth().currentUser;
            if (user) {
                user.getIdToken()
                    .then(token => {
                        // const encodedToken = btoa(token); // Mã hóa bằng Base64
                        localStorage.setItem("token", token);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            
        } catch (error) {
            toast.error(error.message);
        }
        setLoading(false)
    }
    const hanldeShow = () => {
        setShow(!show)
        if (show === true) {
            passRef.current.type = 'password'
        } else {
            passRef.current.type = 'text'
        }
    }

    const uiConfig = {
        signInFlow: "redirect",
        signInSuccessUrl: "/products",
        signInOptions: [
            // {
            //     provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //     requireDisplayName: true,

            // },

            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        tosUrl: '<your-tos-url>',
        privacyPolicyUrl: "<your-url>",
    };
    return (
        <div className="bg-[url('./images/bgAuth.jpg')] w-screen h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col">
            <div className='relative bg-white w-[30%] sm:w-full sm:h-full px-16 py-10 rounded-md flex justify-center items-center flex-col'>
                <header className='mb-10 text-4xl font-semibold'>Sign In</header>
                <form className='grid w-full gap-y-5'>
                    <input required className='ndv__input' ref={emailRef} placeholder='Email'></input>
                    <div className='relative'>
                        <input required className='ndv__input' ref={passRef} type='password' placeholder='Password'></input>
                        <span ref={showRef} onClick={hanldeShow} className="absolute right-3 top-[50%] translate-y-[-50%]">
                            {
                                show ? (
                                    <FontAwesomeIcon icon={faEye} />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                )
                            }
                        </span>
                    </div>
                    <div className="flex justify-center button">
                        <button className='ndv__button' disabled={loading} onClick={hanldeSignIn}>Sign In</button>
                    </div>
                </form>

                <div className="mt-4 text-sm">
                    Or signin with</div>
                <div className="links">
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
                <div >
                    Not a member?
                    <Link className="text-text-link hover:underline" to='/signup'> Sign Up</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignIn;
