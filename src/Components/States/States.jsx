import React from 'react';

const States = () => {
    return (
    <div className='bg-[linear-gradient(124deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] '>
    <div className="top">
        <h1 className='text-4xl font-bold text-center text-white py-8'>Trusted by Millions, Built for You</h1>

    </div>
    <div className="bottom flex flex-col md:flex-row items-center gap-2 md:gap-12 justify-center text-white pb-8">
        <div className="card text-center p-6 rounded-lg transition duration-300 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:bg-white/10 cursor-pointer">
            <h4>Total Downloads</h4>
            <h1 className='text-5xl font-bold pb-2'>29.6M</h1>
            <h4>21% more than last month</h4>
        </div>
        <div className="card text-center p-6 rounded-lg transition duration-300 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:bg-white/10 cursor-pointer">
            <h4>Total Reviews</h4>
            <h1 className='text-5xl font-bold pb-2'>906K</h1>
            <h4>46% more than last month</h4>
        </div>
        <div className="card text-center p-6 rounded-lg transition duration-300 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:bg-white/10 cursor-pointer">
            <h4>Active Apps</h4>
            <h1 className='text-5xl font-bold pb-2'>132+</h1>
            <h4>31 more will Launch</h4>
        </div>

    </div>

</div>
    );
};

export default States;