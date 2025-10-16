import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-12 bg-white rounded-2xl shadow-xl shadow-gray-300/60 transition-all duration-300 transform hover:scale-[1.02]">

      <div className="relative w-36 h-36">
        
        <div 
            className="w-full h-full 
                       border-8 border-gray-200 
                       border-t-8 border-t-slate-500 
                       rounded-full 
                       animate-spin 
                       opacity-80 
                       transition-colors duration-500"
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-300 opacity-50"></div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl font-light tracking-wide text-slate-600 mb-2 animate-pulse transition-opacity duration-700">
          Loading Data...
        </p>
        <p className="text-sm font-light text-gray-400">
          Please wait while we fetch your content.
        </p>
      </div>
    </div>
  );
};


export default LoadingSpinner;