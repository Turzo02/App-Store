import React from "react";
import HeroPng from "../../assets/hero.png";
import playstore from "../../assets/google-play(1).png";
import appStore from "../../assets/appstore (1).png";
const Banner = () => {
    return (
        <div className="max-w-[1440px] mx-auto  ">
            <div className="top   text-center mt-6">
                <h1 className="text-4xl font-bold">We Build</h1>
                <h1 className="text-4xl font-bold">
                    <span className="font-extrabold text-[#9155ef]">Productive</span> Apps
                </h1>
                <p className="max-w-[800px] mx-auto text-gray-700 my-2">
                    At HERO.IO, we craft innovative apps designed to make everyday life
                    simpler, smarter, and more exciting.Our goal is to turn your ideas
                    into digital experiences that truly make an impact.
                </p>
            </div>


            <div className="middle   flex justify-center mt-5">
                <button className="btn btn-outline border-[#9155ef] mr-3 hover:bg-[#9155ef] hover:border-0 transition duration-300">
                    <img src={playstore} alt="playstore" className="mr-2" />
                    Google Play
                </button>

                <button className="btn btn-outline border-[#9155ef] hover:bg-[#9155ef] hover:border-0 transition duration-300">
                    <img src={appStore} alt="appStore" className="mr-2" />
                    App Store
                </button>


            </div>



            <div className="bottom  flex justify-center mt-6 ">
                <img src={HeroPng} alt="heropng" className="   object-cover" />
            </div>
        </div>
    );
};

export default Banner;
