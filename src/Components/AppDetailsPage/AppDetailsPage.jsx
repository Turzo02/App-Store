import React, { useEffect, useState } from 'react';
import downloadpng from "../../assets/icon-downloads.png"
import ratingpng from "../../assets/icon-ratings.png"
import reviewpng from "../../assets/icon-review.png"
import { useLoaderData, useParams } from 'react-router';
import { addToDataBase, getInstallApp } from '../InstallationPage/addToDataBase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AppNotFoundPage from '../../Pages/AppNotFoundPage/AppNotFoundPage';
import AppReviewChart from './AppReviewChart/AppReviewChart';
const MySwal = withReactContent(Swal)


const AppDetailsPage = () => {

  const { id } = useParams()
  const data = useLoaderData()
  const appId = parseInt(id)

  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    const installedApps = getInstallApp()
    if (installedApps.includes(appId)) {
      setInstalled(true)
    }
  }, [appId])




  const signleAppData = data.find(app => app.id === appId)

  const handleInstallBtn = (id) => {
    addToDataBase(id)
    setInstalled(true)

    Swal.fire({
      title: "App Installed Successfully 🎉",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });


  }
  if(!signleAppData){
    return <AppNotFoundPage></AppNotFoundPage>
  }

  
  const { description, companyName, ratingAvg, reviews, title, size, downloads, image } = signleAppData
  const appImg = new URL(`../../assets/${image}`, import.meta.url).href;



  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
      <div className="headInfo flex flex-col md:flex-row items-center md:items-start gap-6 my-6">

        <div className="left w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            className="w-full sm:w-[80%] md:w-full object-cover rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src={appImg}
            alt="App Preview"
          />
        </div>

        <div className="right w-full md:w-2/3">
          <div className="top text-center md:text-left">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-1">
              {title}
            </h1>
            <p className="mb-2 text-gray-600">
              Developed by <span className="text-[#9155ef] font-medium">{companyName}</span>
            </p>
            <hr className="border-gray-300" />
          </div>

          <div className="middle my-6 flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-6 text-center sm:text-left">
            <div className="flex-1 min-w-[120px]">
              <img className="w-[28px] mx-auto sm:mx-0" src={downloadpng} alt="Downloads Icon" />
              <p className="text-gray-700">Downloads</p>
              <h1 className="font-bold text-2xl sm:text-3xl">{downloads}</h1>
            </div>
            <div className="flex-1 min-w-[120px]">
              <img className="w-[28px] mx-auto sm:mx-0" src={ratingpng} alt="Rating Icon" />
              <p className="text-gray-700">Average Ratings</p>
              <h1 className="font-bold text-2xl sm:text-3xl">{ratingAvg}</h1>
            </div>
            <div className="flex-1 min-w-[120px]">
              <img className="w-[28px] mx-auto sm:mx-0" src={reviewpng} alt="Reviews Icon" />
              <p className="text-gray-700">Total Reviews</p>
              <h1 className="font-bold text-2xl sm:text-3xl">{reviews}</h1>
            </div>
          </div>

          <div className="bottom flex justify-center md:justify-start">

            <button onClick={() => handleInstallBtn(appId)}
              disabled={installed}
              className={`py-3 px-8 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer 
        ${installed
                  ? "bg-gray-500 cursor-not-allowed hover:shadow-none"
                  : "bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]"
                }`}
            >
              {installed ? "Installed" : `Install Now (${size}MB)`}
            </button>

          </div>
        </div>
      </div>

      <div className="Chartsratings my-6">
        <div className="reachart">
            <AppReviewChart ratings={signleAppData.ratings}></AppReviewChart>
        </div>

      </div>

      <div className="Description rounded-2xl shadow-md p-4">
        <h1 className="text-2xl font-semibold mb-3 text-center md:text-left">Description</h1>
        <p className="text-justify text-gray-800 leading-relaxed">
          {description}
        </p>
      </div>
    </div>


  );
};

export default AppDetailsPage; 