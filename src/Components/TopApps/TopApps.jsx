import { Link } from "react-router";
import downloadICon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
const TopApps = ({ topAppsData }) => {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto  mt-8'>
                <div className="heading text-center">
                    <h1 className='text-4xl font-bold'>Trending Apps</h1>
                    <p className='text-gray-700 py-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="CardContainer grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-4 py-8  ">

                    {/* Card Design */}

                    {
                        topAppsData.map((data) =>
                            <Link to={`/appdetailspage/${data.id}`} key={data.id} className="card bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                                <div className="top flex justify-center p-3">
                                    <img src={data.image} alt="" className="w-full object-cover rounded-2xl" />
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

                            </Link>

                        )
                    }

                </div>


                <div className="bottom flex justify-center">

                    <Link to={"/apps"}>

                        <button
                            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
                 flex py-3 px-8 rounded justify-center text-white font-semibold border-0 
                 cursor-pointer mb-8
                 hover:bg-[linear-gradient(125.07deg,rgba(120,30,250,1),rgba(180,110,250,1)_100%)]
                 transition-all duration-300"
                        >
                            Show All
                        </button>
                        
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default TopApps;