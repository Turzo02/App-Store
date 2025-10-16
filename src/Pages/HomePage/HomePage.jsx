import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import States from '../../Components/States/States';
import TopApps from '../../Components/TopApps/TopApps';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const topAppsData = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <States></States>
            <TopApps topAppsData={topAppsData} ></TopApps>
        </div>
    );
};

export default HomePage;