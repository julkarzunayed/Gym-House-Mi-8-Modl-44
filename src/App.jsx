
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions';
import WorkoutPlans from './components/WorkoutPlans/WorkoutPlans';
import MembersActivityLineChart from './components/MembersActivityLineChart/MembersActivityLineChart';
import axios from 'axios';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';

const pricingData = fetch("./pricingData.json").then(res => res.json());

const workoutProps = fetch("./workoutPlans.json").then(res => res.json());

const membersPromise = axios.get("./membersData.json")

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
        <Banner></Banner>
      </header>
      <main className='container mx-auto'>
        <Suspense fallback={<div className='flex justify-center' >
          <span className="loading loading-infinity loading-xl "></span>
        </div>}>
          <PricingOptions pricingData={pricingData}></PricingOptions>
        </Suspense>
        <Suspense fallback={<div className='flex justify-center' >
          <span className="loading loading-infinity loading-xl "></span>
        </div>}>
          <WorkoutPlans workoutProps={workoutProps}></WorkoutPlans>
        </Suspense>

        <Suspense>
        <MembersActivityLineChart membersPromise={membersPromise}></MembersActivityLineChart>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
