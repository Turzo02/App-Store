import React from 'react';
import downloadpng from "../../assets/icon-downloads.png"
import ratingpng from "../../assets/icon-ratings.png"
import reviewpng from "../../assets/icon-review.png"
import { useLoaderData, useParams } from 'react-router';

const AppDetailsPage = () => {

  const { id } = useParams()
  const data = useLoaderData()
  const appId = parseInt(id)

  const signleAppData = data.find(app =>
    app.id === appId
  )
  const { description, companyName, ratingAvg, reviews, title, size, downloads , image} = signleAppData

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
      <div className="headInfo flex flex-col md:flex-row items-center md:items-start gap-6 my-6">

        <div className="left w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            className="w-full sm:w-[80%] md:w-full object-cover rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src={image}
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
            <button
              className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
          py-3 px-8 rounded-lg text-white font-semibold 
          hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)] 
          transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Install Now ({size}MB)
            </button>
          </div>
        </div>
      </div>

      <div className="Chartsratings my-6">
        <h1 className='text-2xl font-semibold'>Ratings</h1>

      </div>

      <div className="Description">
        <h1 className="text-2xl font-semibold mb-3 text-center md:text-left">Description</h1>
        <p className="text-justify text-gray-800 leading-relaxed">
          {description}
        </p>
      </div>
    </div>


  );
};

export default AppDetailsPage; 