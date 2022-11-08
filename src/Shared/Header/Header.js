import React, { useContext, useState } from 'react';
import { FaBars, FaCamera, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import profile from '../../assets/navbar-logo/profile.png';


const Header = () => {
const [open, setOpen] = useState(false)

const {user, logOut} = useContext(AuthContext)

console.log(user?.email)

    const links = [
        {id:1, name: "Home", link: '/' },
        {id:2, name: "home", link: '/' },
        {id:3, name: "home", link: '/' },
    ];


    

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-[#031a28] py-4 md:px-10 px-7'>
                <div className=' font-bold text-2xl cursor-pointer font-[Poppins] text-white '>
                    <Link to='/' className='flex items-center'>
                    <span className='text-3xl text-yellow-600 mr-1 pt-'><FaCamera></FaCamera></span>
                    Protography
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute top-6 right-8 cursor-pointer md:hidden'>
                    {
                        open ? <FaTimes/> : <FaBars/>
                    }
                </div>
            <ul className={`md:flex md:items-center bg-[#031a28] absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${open ? 'top-[65px] opacity-100': 'top-[-490px]'} md:opacity-100`}>
                {
                    links.map((link) => {
                        return <li className='md:ml-8 text-xl  md:my-0 my-7 ' key={link.id}>
                            <Link className='text-white hover:text-gray-400 duration-500' to={link.link}>{link.name}</Link>
                        </li>
                    })
                }
                
                {
                    
                    user?.email 
                    ? <div className='flex flex-col md:flex-row justify-center'>
                    <button onClick={handleLogOut} className='bg-yellow-600  mx-auto w-28 text-white font-bold text-gray-black font=[poppins] py-2 px-6  rounded md:ml-8 hover:bg-indigo-400 duration-500 md:mb-0 mb-10'>Log Out</button>
                    <button className='  px-6 rounded mx-auto  duration-500 md:mb-0 mb-10'>
                        <img src={user.photoURL ? user.photoURL : profile} className='rounded-[25.5rem] w-11' alt="" />
                    </button>
                    
                    </div>
                    : <Link to='/login'>
                    <button className='bg-yellow-600 text-gray-black font=[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 md:mb-0 mb-10'>Login</button>
                    </Link>
                }
            </ul>
            </div>
        </div>
    );
};

export default Header;