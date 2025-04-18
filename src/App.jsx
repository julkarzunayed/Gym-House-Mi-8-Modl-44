
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions';

const pricingData = fetch("./pricingData.json").then(res => res.json());

function App() {
  

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main className='container mx-auto'>
        <Suspense fallback={<div className='flex justify-center' >
          <span className="loading loading-infinity loading-xl "></span>
        </div>}>
          <PricingOptions pricingData={pricingData}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
