import React, { useEffect, useState } from 'react';
import downloadICon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import { useLoaderData } from 'react-router';
import { getInstallApp } from './addToDataBase';

const InstallationPage = () => {

  const data = useLoaderData()
  const [appInstallList,setAppInstallList ] = useState([])
  useEffect(()=>{
    const storeAppData = getInstallApp()
    const convertedAppData = storeAppData.map(id => parseInt(id))
    const installList = data.filter(app => convertedAppData.includes(app.id))
    setAppInstallList(installList)
  },[])





    return (

        <div className='max-w-[1440px] mx-auto  mt-8  '>
            <div className="heading text-center">
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-700 py-2'>Explore Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="middle flex justify-between items-center px-2">
                <div className='font-semibold text-2xl'>
                    <span className='text-[#9155ef]  font-bold'>{appInstallList.length}</span>
                    <span className=' text-gray-700'> Apps Found</span>
                </div>
                <div>
                    <select
                        defaultValue=""
                        className="bg-white text-gray-700 rounded-md outline-1 px-3 py-2
             focus:outline-none focus:ring-1 focus:ring-[#9155ef] focus:border-[#9155ef]
             font-semibold"
                    >
                        <option value="" disabled>
                            Sort by
                        </option>
                        <option value="Size" className="font-semibold">Size</option>
                        <option value="Rating" className="font-semibold">Rating</option>
                        <option value="Downloads" className="font-semibold">Downloads</option>
                    </select>

                </div>
            </div>

            <div className="appCardContainer mt-4 ">


                {/* card */}
                {
                    appInstallList.map((app)=>{
                        
const { ratingAvg,  title, size, downloads, image } = app
  const appImg = new URL(`../../assets/${image}`, import.meta.url).href;
                        
                        
                        return (


<div
  key={app.id}
  className="flex flex-col justify-between md:flex-row md:items-center gap-4 p-4 bg-white rounded-lg shadow-lg mb-3 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xl transition-all duration-300"
>
  <div className="flex items-center gap-4">
    <img className="w-20 h-20 rounded-xl object-cover" src={appImg} alt="applogo" />
    <div className="space-y-2">
      <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
      <div className="flex gap-3 text-sm  items-center">
        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-md ">
          <img className="w-4" src={downloadICon} alt="downloads" />
          {downloads}
        </span>
        <span className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-500 rounded-md">
          <img className="w-4" src={ratingIcon} alt="rating" />
          {ratingAvg}
        </span>
        <span className="font-semibold text-[18px] text-purple-600 border-2 rounded-md px-2 ">{size} MB</span>
      </div>
    </div>
  </div>
  <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-2 px-6 rounded-md hover:from-purple-700 hover:to-purple-500 transition-all duration-300">
    Uninstall
  </button>
</div>
                        )})
                }
          




            </div>
        </div>
    );
};

export default InstallationPage;