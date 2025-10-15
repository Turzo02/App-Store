import React from 'react';
import errorPng from '../../assets/error-404.png'
const ErrorPage = () => {
    return (
        <div className='max-w-[1440px] mx-auto my-10 '>
            <div className='flex justify-center'>
                <img src={errorPng} alt="" />
            </div>
            <div className='heading'>
                <div className="heading text-center">
                    <h1 className='text-3xl md:text-4xl font-bold'>Oops, page not found! </h1>
                    <p className='text-gray-700 py-2'>The page you are looking for is not available. </p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
             cursor-pointer 
             hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
             transition-all duration-300"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;