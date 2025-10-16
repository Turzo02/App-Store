import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import AllApplicationPage from '../Components/AllAplicationPage/AllApplicationPage';
import InstallationPage from '../Components/InstallationPage/InstallationPage';
import AppDetailsPage from '../Components/AppDetailsPage/AppDetailsPage';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/TopAppsData.json"),
        Component: HomePage
      },

      {
        path: "/apps",
        loader: () => fetch("/AllAppData.json"),
        Component: AllApplicationPage
      },


      {
        path: "/instalation",
        loader: () => fetch("/AllAppData.json"),
        Component:InstallationPage

      },
      {
        path: "/appdetailspage/:id",
        loader: () => fetch("/AllAppData.json"),
        Component:AppDetailsPage
      },


    ]
  },
]);