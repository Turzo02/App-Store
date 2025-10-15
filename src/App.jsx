
import './App.css'
import AllApplicationPage from './Components/AllAplicationPage/AllApplicationPage'
import AppDetailsPage from './Components/AppDetailsPage/AppDetailsPage'
import AppNotFoundPage from './Components/AppNotFoundPage/AppNotFoundPage'
import Banner from './Components/Banner/Banner'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Footer from './Components/Footer/Footer'
import InstallationPage from './Components/InstallationPage/InstallationPage'
import Navbar from './Components/Navbar/Navbar'
import States from './Components/States/States'
import TopApps from './Components/TopApps/TopApps'

function App() {

  return (
    <>
      <Navbar></Navbar>
    {/* <AllApplicationPage></AllApplicationPage> */}
    {/* <InstallationPage></InstallationPage> */}
    {/* <ErrorPage></ErrorPage> */}
    <AppDetailsPage></AppDetailsPage>
    {/* <AppNotFoundPage></AppNotFoundPage> */}
      {/* <Banner></Banner>
      <States></States>
      <TopApps></TopApps> */}
      <Footer></Footer>
    </>
  )
}

export default App
