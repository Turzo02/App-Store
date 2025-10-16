import React, { useEffect, useState } from "react";
import downloadICon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link, useLoaderData } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllApplicationPage = () => {
  const allAppsData = useLoaderData()

  const [search, setSearch] = useState("")
  const [filteredApps, setFilteredApps] = useState(allAppsData)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    const timeOut = setTimeout(() => {
      const filtered = allAppsData.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(filtered)
      setLoading(false)
    }, 330)
    return () => clearTimeout(timeOut)
  }, [search, allAppsData])

  return (
    <div className="max-w-[1440px] mx-auto  mt-8">
      <div className="heading text-center">
        <h1 className="text-3xl md:text-4xl  font-bold">Our All Applications </h1>
        <p className="text-gray-700 py-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="middle flex flex-col md:flex-row items-center justify-between py-2 px-3">
        <span className="text-sm md:text-2xl font-semibold mb-4">
          (<span className="text-[#9155ef]">{filteredApps.length}</span>) Apps Found
        </span>

        <label className="input relative flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus-within:ring-2 focus-within:ring-[#9155ef]">
          <svg
            className="h-5 w-5 text-gray-400 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="search"
            value={search}
            required
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-transparent focus:outline-none w-full text-gray-800 placeholder-gray-400"
          />
        </label>
      </div>

      {
        loading && <LoadingSpinner></LoadingSpinner>
      }

      {
        !loading && filteredApps.length === 0 && (
          <div className="min-h-[350px] flex flex-col justify-center items-center text-center animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-600 pb-6 flex items-center gap-3">
              <picture>
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f927/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f927/512.gif"
                  alt="🤧"
                  width="64"
                  height="64"
                  className="inline-block"
                />
              </picture>
              No Apps Found
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-md ">
              We couldn’t find any apps matching your search.
            </p>
      
          </div>
        )
      }


      <div className="CardContainer grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-4  pt-2 pb-8  ">
        {/* Card Design */}

        {!loading &&
          filteredApps.map(data => {

            const appImg = new URL(`../../assets/${data.image}`, import.meta.url).href;


            return (<Link to={`/appdetailspage/${data.id}`} key={data.id}
              className=" 
                                        card bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100
                            "
            >

              <div className="top flex justify-center p-3">
                <img src={appImg} alt="" className="w-full object-cover rounded-2xl" />
              </div>
              <h1 className="px-3 font-semibold text-2xl">{data.title}</h1>
              <div className="bottom flex justify-between px-3 pb-3 mt-2">
                <div className="flex items-center text-green-600 bg-green-200 py-1 px-4 rounded-md text-2xl">
                  <img className="w-4 mr-1" src={downloadICon} alt="" />
                  {data.downloads}
                </div>
                <div className="flex items-center text-orange-500 bg-orange-200 py-1 px-4 rounded-md text-2xl">
                  <img className="w-4 mr-1" src={ratingIcon} alt="" />
                  {data.ratingAvg}
                </div>
              </div>

            </Link>)
          }

          )
        }


      </div>
    </div>
  );
};

export default AllApplicationPage;
