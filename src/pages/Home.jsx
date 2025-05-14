import React from 'react'
import Hero from '../components/Hero'
import Servicing from '../components/Servicing'
import Experience from '../components/Experience'
import Logisticssiwper from '../components/Logisticssiwper'
import LogisticsCard from "../components/LogisticsCard"


const Home = () => {
  return (
    <>
        {/* <div>Home</div> */}
        {/* <Homenavbar /> */}
        <Hero  className="hero"/>
      <Servicing />
      <Experience />
      <Logisticssiwper />
      <LogisticsCard />
    </>
  )
}

export default Home