import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation()
    const isNavigating = navigation.state === "loading";

    

    return (
        <div>
            <Navbar></Navbar>
            {
                isNavigating && <LoadingSpinner></LoadingSpinner>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;