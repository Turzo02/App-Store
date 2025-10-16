import React, { useEffect, useState } from 'react';
import downloadICon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import { useLoaderData } from 'react-router';
import { getInstallApp } from './addToDataBase';
import Swal from 'sweetalert2';

const InstallationPage = () => {

  const data = useLoaderData()
  const [appInstallList, setAppInstallList] = useState([])
  useEffect(() => {
    const storeAppData = getInstallApp()
    const convertedAppData = storeAppData.map(id => parseInt(id))
    const installList = data.filter(app => convertedAppData.includes(app.id))
    setAppInstallList(installList)
  }, [data])

  const parseDownloads = (val) => {
    if (!val) return 0;
    val = val.toUpperCase().trim()
    if (val.endsWith("M")) {
      return parseFloat(val.replace("M", "")) * 1000000
    }
    else if (val.endsWith("K")) {
      return parseFloat(val.replace("M", "")) * 1000
    }
    else {
      return parseInt(val)
    }
  }

  const [sort, setSort] = useState("")

  const handleSort = (Type) => {
    setSort(Type);
    let sortedList = [...appInstallList];

    if (Type === "Size") {
      sortedList.sort((a, b) => a.size - b.size);
    }
    else if (Type === "Rating") {
      sortedList.sort((a, b) => a.ratingAvg - b.ratingAvg);
    }
    else if (Type === "Downloads-High") {
      sortedList.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)); 
    }
    else if (Type === "Downloads-Low") {
      sortedList.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)); 
    }

    setAppInstallList(sortedList);
  };


  const handleUninstallBtn = () => {
    Swal.fire({
      title: "App Uninstalled Successfully!",
      icon: "success",
      draggable: true,
      confirmButtonColor: "#9155ef",
    });

  }


  return (

    <div className='max-w-[1440px] mx-auto  mt-8  '>
      <div className="heading text-center">
        <h1 className='text-3xl md:text-4xl font-bold'>Your Installed Apps</h1>
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
            onChange={(e) => handleSort(e.target.value)}
            className="w-full md:w-auto bg-white text-gray-700 font-semibold 
   rounded-xl px-4 py-2 appearance-none 
   border border-gray-300 shadow-sm 
   focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500
   transition-all duration-300 ease-in-out
   hover:shadow-md cursor-pointer"
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="Size">Size</option>
            <option value="Rating">Rating</option>
            <option value="Downloads-High">Downloads : High-Low</option>
            <option value="Downloads-Low">Downloads : Low-High</option>
          </select>



        </div>
      </div>

      <div className="appCardContainer mt-4 ">


        {/* card */}
        {
          appInstallList.map((app) => {

            const { ratingAvg, title, size, downloads, image } = app
            const appImg = new URL(`../../assets/${image}`, import.meta.url).href;


            return (


              <div
                key={app.id}
                className="flex flex-col justify-between md:flex-row md:items-center gap-4 p-4 bg-white rounded-lg  mb-3 hover:-translate-y-0.5  hover:shadow-xl transition-all duration-300 border-gray-300 shadow-sm "
              >
                <div className="flex items-center gap-4">
                  <img className="w-20 h-20 rounded-xl object-cover " src={appImg} alt="applogo" />
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
                      <span className="font-semibold text-[16px] text-purple-600 border rounded-md px-2  ">{size} MB</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleUninstallBtn()} className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-2 px-6 rounded-md hover:from-purple-700 hover:to-purple-500 transition-all duration-300 cursor-pointer">
                  Uninstall
                </button>
              </div>
            )
          })
        }





      </div>
    </div>
  );
};

export default InstallationPage;