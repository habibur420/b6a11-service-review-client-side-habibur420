import React, { useContext } from 'react';
import regImage from '../../assets/register-img/register.png';
import { FaCashRegister, FaGooglePlus} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const {createUser, updataUserProfile, loginGoogle} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            // updataProfile 
            updataUserProfile(name, photo)
            .then()
            .catch()
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
        <div className='py-24 md:flex md:flex-row bg-[#01141f]'>
            <div className='basis-1/2 flex justify-center items-center w-full'>
                <div>
                    <img src={regImage} className='w-full' alt="" />
                </div>
            </div>
            <div className='basis-1/2 flex justify-center items-center text-white'>
                <div className=' w-full '>
                    <h1 className='text-4xl text-gray-400'>Register</h1>
                    <form onSubmit={handleRegister} className='w-3/4 mx-auto'>
                        <div className="mb-3">
                            <label className=" block text-left text-gray-400  text-sm font-bold mb-2" htmlFor="name">
                                FullName
                            </label>
                            <input name='name' className="shadow block border bg-[#01141f] rounded  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 "  type="text" placeholder="Full Name" required/>
                        </div>
                        <div className="mb-3">
                            <label className=" block text-left text-gray-400  text-sm font-bold mb-2" htmlFor="photo">
                                Photo URL
                            </label>
                            <input name='photo' className="shadow block border bg-[#01141f] rounded  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 " type="text" placeholder="Photo URL" required/>
                        </div>
                        <div className="mb-3">
                            <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input name='email' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 "  type="email" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label className=" block text-left text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input name='password' className="shadow block border rounded bg-[#01141f]  w-full py-2 px-3 text-gray-400 focus:outline-yellow-600 "  type="password" placeholder="Password" />
                        </div>
                        <div className='flex  text-center flex-col lg:flex-row  md:justify-evenly lg:gap-0 gap-3'>
                            <button type='submit' className='bg-yellow-600 flex justify-center items-center hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                            <FaCashRegister className=' text-white text-3xl mr-2 rounded-lg  '/> Register</button>
                            <button onClick={handleGoogleLogin} className='bg-yellow-600  flex justify-center items-center hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                            <FaGooglePlus className=' text-white text-3xl mr-2 rounded-lg  ' />
                            Google
                            </button>
                        </div>
                        <p className='text-left my-3'>You have an alredy account please <Link className='underline text-teal-500' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;