import { faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'firebase/compat/auth';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from '../firebaseConfig';
const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const emailRef = useRef();
    const passRef = useRef();

    const showRef = useRef();
    const navigate = useNavigate();
    const [errorToast, setError] = useState(null);
    const [show, setShow] = useState(false)
    const hanldeShow = () => {
        setShow(!show)
        if (show === true) {
            passRef.current.type = 'password'
        } else {
            passRef.current.type = 'text'
        }
    }
    const hanldeSignUp = async () => {
        setLoading(true);
        try {
            await signup(emailRef.current.value, passRef.current.value);
            toast.success('Đăng ký thành công');
            setTimeout(()=>{
                navigate('/home')
            },2000)
        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("Email đã được sử dụng bởi người dùng khác.");
                    break;
                case "auth/invalid-email":
                    setError("Email không hợp lệ.");
                    break;
                case "auth/weak-password":
                    setError("Mật khẩu phải có ít nhất 6 ký tự.");
                    break;
                default:
                    setError("Đăng ký thất bại, vui lòng thử lại sau.");
                    break;
            }
            toast.error(errorToast);
        }
        setLoading(false)
    }
    return (
        <div>
            <div className="bg-[url('./images/bgAuth.jpg')] w-screen  h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col">
                <div className='relative bg-white w-[30%] sm:w-full sm:h-full px-16 py-10 rounded-md flex justify-center items-center flex-col'>
                    <header className='mb-10 text-4xl font-semibold'>Sign Up</header>
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
                            <button className='ndv__button' disabled={loading} onClick={hanldeSignUp}>Sign Up</button>
                        </div>
                        
                    </form>
                    <div className='mt-3'>
                    Do you already have an account?
                    <Link className="text-text-link hover:underline" to='/signin'>Sign In</Link>
                </div>
                </div>
                <ToastContainer />
            </div>
        </div>

    );
}

export default SignUp;
