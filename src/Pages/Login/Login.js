import React, { useContext } from 'react';
import { FaCashRegister, FaGooglePlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logImage from '../../assets/login-img/login.png'
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { login, loginGoogle } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const handleGoogleLogin = () => {
        loginGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <div className='py-24 md:flex md:flex-row  bg-[#01141f]'>
            <div className='basis-1/2 flex justify-center items-center w-full'>
                <div>
                    <img src={logImage} className='w-full' alt="" />
                </div>
            </div>
            <div className='basis-1/2 flex justify-center items-center text-white'>
                <div className=' w-full '>
                    <h1 className='text-4xl text-gray-400'>Register</h1>
                    <form onSubmit={handleLogin} className='w-3/4 mx-auto'>
                        <div className="mb-3">
                            <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input name='email' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-700 focus:outline-yellow-600 " type="email" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                                Password
                            </label>
                            <input name='password' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-700 focus:outline-yellow-600 " type="password" placeholder="Password" />
                        </div>
                        <div className='flex  text-center flex-col lg:flex-row  md:justify-evenly lg:gap-0 gap-3'>
                            <button type='submit' className='bg-yellow-600 flex items-center justify-center hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                                <FaCashRegister className='text-white text-3xl mr-2 rounded-lg' /> Login</button>
                            <button onClick={handleGoogleLogin} className='bg-yellow-600 flex items-center justify-center hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                                <FaGooglePlus className=' text-white text-3xl mr-2 rounded-lg  ' />
                                Google
                            </button>
                        </div>
                        <p className='text-left my-3'>create an acccount Please <Link className='underline text-teal-500' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;