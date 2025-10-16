import React from 'react';
import ApperrorPng from '../../assets/App-Error.png'
import { Link } from 'react-router';
const AppNotFoundPage = () => {
    return (
             <div className='max-w-[1440px] mx-auto my-7'>
                        <div className='flex justify-center'>
                            <img src={ApperrorPng} alt="" />
                        </div>
                            <div className="heading text-center my-6 ">
                                <h1 className='text-3xl md:text-4xl font-bold'>OPPS!! APP NOT FOUND </h1>
                                <p className='text-gray-700 py-2'>The App you are requesting is not found on our system.  please try another apps</p>
                            </div>
                        <div className='flex justify-center'>
                    <Link to={"/apps"}>
                            <button
                                className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
                         flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
                         cursor-pointer 
                         hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
                         transition-all duration-300"
                            >
                                Go Back
                            </button>
                    </Link>

                        </div>
                    </div>
    );
};

export default AppNotFoundPage;