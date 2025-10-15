import React from 'react';
import img1 from "../../assets/demo-app (1).webp"
import downloadICon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
const TopApps = () => {
    return (
        <div className='max-w-[1440px] mx-auto  mt-8'>
            <div className="heading text-center">
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-gray-700 py-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="CardContainer grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-4 py-8  ">

                {/* Card Design */}
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-2xl overflow-hidden 
                hover:shadow-2xl hover:-translate-x-1 hover:translate-y-1 
                transition-transform duration-200">
                    <div className="top flex justify-center p-3">
                        <img src={img1} alt="" className="w-full object-cover rounded-2xl" />
                    </div>
                    <h1 className="px-3 mt-2">Forest: Focus for Productivity</h1>
                    <div className="bottom flex justify-between px-3 pb-3 mt-2">
                        <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={downloadICon} alt="" />
                            9M
                        </div>
                        <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                            <img className="w-4 mr-1" src={ratingIcon} alt="" />
                            5
                        </div>
                    </div>
                </div>

            </div>


            <div className="bottom flex justify-center">
                <button
                    className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
             cursor-pointer mb-8
             hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
             transition-all duration-300"
                >
                    Show All
                </button>

            </div>
        </div>
    );
};

export default TopApps;