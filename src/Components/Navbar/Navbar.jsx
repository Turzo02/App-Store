import React from 'react';
import logo from '../../assets/logo.png';
import { Github } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='shadow-sm sticky top-0 bg-white z-50'>
            <div className="navbar  max-w-[1440px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow  bg-white text-gray-700 font-semibold">

                        <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `px-4 py-2 rounded-md  focus:outline-none ${isActive ? "bg-[#9155ef] text-white" : "text-gray-700"}`
    }
  >
    Home
  </NavLink>
</li>
<li>
  <NavLink
    to="/apps"
    className={({ isActive }) =>
      `px-4 py-2 rounded-md  focus:outline-none ${isActive ? "bg-[#9155ef] text-white" : "text-gray-700"}`
    }
  >
    Apps
  </NavLink>
</li>
<li>
  <NavLink
    to="/instalation"
    className={({ isActive }) =>
      `px-4 py-2 rounded-md  focus:outline-none ${isActive ? "bg-[#9155ef] text-white" : "text-gray-700"}`
    }
  >
    Installation
  </NavLink>
</li>



                        </ul>
                    </div>
                    <div className='flex items-center '>
                        <img
                            className="w-[35px] h-[35px]  mx-2"
                            src={logo}
                            alt="logo"
                        />


                        <NavLink to="/">
                            <span className="btn btn-ghost text-xl text-[#9155ef] font-bold 
                   hover:bg-[#9155ef] hover:text-white border-0 shadow-none">
                                HERO.IO
                            </span>
                        </NavLink>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-[16px] ">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `hover:text-[#9155ef] focus:outline-none focus:bg-transparent ${isActive ? "text-[#9155ef]" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/apps"
                                className={({ isActive }) =>
                                    `hover:text-[#9155ef] focus:outline-none focus:bg-transparent ${isActive ? "text-[#9155ef]" : ""}`
                                }
                            >
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/instalation"
                                className={({ isActive }) =>
                                    `hover:text-[#9155ef] focus:outline-none focus:bg-transparent ${isActive ? "text-[#9155ef]" : ""}`
                                }
                            >
                                Installation
                            </NavLink>
                        </li>


                    </ul>
                </div>
                <div className="navbar-end">
                    <a target='_blank'
                        href="https://github.com/Turzo02"
                        className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-2 px-4 rounded justify-center text-white font-semibold border-0 
             hover:opacity-90  duration-300 transition  ease-in-out hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)] hover:shadow-lg cursor-pointer"
                    >
                        <Github className="mr-2" /> Contribute
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;