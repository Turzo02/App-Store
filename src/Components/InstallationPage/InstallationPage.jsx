import React from 'react';
import img1 from "../../assets/demo-app (1).webp"
import downloadICon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
const InstallationPage = () => {
    return (
        <div className='max-w-[1440px] mx-auto  mt-8  '>
            <div className="heading text-center">
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-700 py-2'>Explore Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="middle flex justify-between items-center px-2">
                <div className='font-semibold'>
                    <span>1</span>
                    <span> Apps Found</span>
                </div>
                <div>
                    <select className="bg-white text-gray-800  rounded-md outline-1 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#9155ef] focus:border-[#9155ef] font-semibold">
                        <option disabled selected>Sort by</option>
                        <option className='font-semibold'>Size</option>
                        <option className='font-semibold'>Rating</option>
                        <option className='font-semibold'>Downloads</option>
                    </select>



                </div>
            </div>

            <div className="appCardContainer mt-4 ">
                {/* card */}
                <div className="appCard flex  flex-col md:flex-row md:justify-between md:items-center rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)] mb-3  ">
                    <div className="left flex ">
                        <div>
                            <img className='w-24 p-2' src={img1} alt="applogo" />
                        </div>
                        <div className="info py-2">
                            <h1>Forest: Focus for Productivity</h1>
                            <div>
                                <div className="bottom flex justify-between  px-3 pb-3 mt-2">
                                    <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={downloadICon} alt="" />
                                        9M
                                    </div>
                                    <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={ratingIcon} alt="" />
                                        5
                                    </div>
                                    <h1> 256 MB</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right px-2 pb-2">

                        <button
                            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
             cursor-pointer 
             hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
             transition-all duration-300"
                        >
                            Uninstall
                        </button>
                    </div>
                </div>
           
                <div className="appCard flex  flex-col md:flex-row md:justify-between md:items-center rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)] mb-3  ">
                    <div className="left flex ">
                        <div>
                            <img className='w-24 p-2' src={img1} alt="applogo" />
                        </div>
                        <div className="info py-2">
                            <h1>Forest: Focus for Productivity</h1>
                            <div>
                                <div className="bottom flex justify-between  px-3 pb-3 mt-2">
                                    <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={downloadICon} alt="" />
                                        9M
                                    </div>
                                    <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={ratingIcon} alt="" />
                                        5
                                    </div>
                                    <h1> 256 MB</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right px-2 pb-2">

                        <button
                            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
             cursor-pointer 
             hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
             transition-all duration-300"
                        >
                            Uninstall
                        </button>
                    </div>
                </div>
           
                <div className="appCard flex  flex-col md:flex-row md:justify-between md:items-center rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)] mb-3  ">
                    <div className="left flex ">
                        <div>
                            <img className='w-24 p-2' src={img1} alt="applogo" />
                        </div>
                        <div className="info py-2">
                            <h1>Forest: Focus for Productivity</h1>
                            <div>
                                <div className="bottom flex justify-between  px-3 pb-3 mt-2">
                                    <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={downloadICon} alt="" />
                                        9M
                                    </div>
                                    <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={ratingIcon} alt="" />
                                        5
                                    </div>
                                    <h1> 256 MB</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right px-2 pb-2">

                        <button
                            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
             cursor-pointer 
             hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
             transition-all duration-300"
                        >
                            Uninstall
                        </button>
                    </div>
                </div>
           
                <div className="appCard flex  flex-col md:flex-row md:justify-between md:items-center rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)] mb-3  ">
                    <div className="left flex ">
                        <div>
                            <img className='w-24 p-2' src={img1} alt="applogo" />
                        </div>
                        <div className="info py-2">
                            <h1>Forest: Focus for Productivity</h1>
                            <div>
                                <div className="bottom flex justify-between  px-3 pb-3 mt-2">
                                    <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={downloadICon} alt="" />
                                        9M
                                    </div>
                                    <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={ratingIcon} alt="" />
                                        5
                                    </div>
                                    <h1> 256 MB</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right px-2 pb-2">

                        <button
                            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
             cursor-pointer 
             hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
             transition-all duration-300"
                        >
                            Uninstall
                        </button>
                    </div>
                </div>
           
                <div className="appCard flex  flex-col md:flex-row md:justify-between md:items-center rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)] mb-3  ">
                    <div className="left flex ">
                        <div>
                            <img className='w-24 p-2' src={img1} alt="applogo" />
                        </div>
                        <div className="info py-2">
                            <h1>Forest: Focus for Productivity</h1>
                            <div>
                                <div className="bottom flex justify-between  px-3 pb-3 mt-2">
                                    <div className="flex items-center text-green-600 bg-green-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={downloadICon} alt="" />
                                        9M
                                    </div>
                                    <div className="flex items-center text-orange-500 bg-orange-200 px-2 rounded-md">
                                        <img className="w-4 mr-1" src={ratingIcon} alt="" />
                                        5
                                    </div>
                                    <h1> 256 MB</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right px-2 pb-2">

                        <button
                            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
             flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
             cursor-pointer 
             hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
             transition-all duration-300"
                        >
                            Uninstall
                        </button>
                    </div>
                </div>
           
         
           
             

            </div>
        </div>
    );
};

export default InstallationPage;