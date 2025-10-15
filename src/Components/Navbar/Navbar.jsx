import React from 'react';
import logo from '../../assets/logo.png';
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar  shadow-sm max-w-[1440px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white ">
                        <li><a>Home</a></li>
                        <li><a>Apps</a></li>
                        <li><a>Instalation</a></li>
                    </ul>
                </div>
                <div className='flex items-center '>
                    <img
                        className="w-[35px] h-[35px]  mx-2"
                        src={logo}
                        alt="logo"
                    />

                    <a className="btn btn-ghost text-xl text-[#9155ef] font-bold hover:bg-[#9155ef] hover:text-white border-0 shadow-none">HERO.IO</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-[16px] ">
                    <li><a>Home</a></li>
                    <li><a>Apps</a></li>
                    <li><a>Instalation</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href="https://github.com/Turzo02/App-Store"
                    className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-2 px-4 rounded justify-center text-white font-semibold border-0 
             hover:opacity-90 transition duration-300"
                >
                    <Github className="mr-2" /> Contribute
                </a>

            </div>
        </div>
    );
};

export default Navbar;