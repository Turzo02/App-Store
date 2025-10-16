import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import AllApplicationPage from '../Components/AllAplicationPage/AllApplicationPage';
import InstallationPage from '../Components/InstallationPage/InstallationPage';
import AppDetailsPage from '../Components/AppDetailsPage/AppDetailsPage';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {index:true,
            loader:()=>fetch("/TopAppsData.json"),
            path:"/",
            Component:HomePage
        },
        {
            loader:()=>fetch("/AllAppData.json"),
            path:"/apps",
            Component:AllApplicationPage
        },
        {
            path:"/instalation",
            loader:()=>fetch("/AllAppData.json"),
            Component:InstallationPage
        },
        {
          path: "/appdetailspage/:id",
          loader:()=>fetch("/AllAppData.json"),
          Component:AppDetailsPage
        },
    
   
    ]
  },
]);