import React from 'react'
import Hero from '../components/Hero'
import Servicing from '../components/Servicing'
import Experience from '../components/Experience'
import Logisticssiwper from '../components/Logisticssiwper'
import LogisticsCard from "../components/LogisticsCard"
import Sectionindustry from '../components/Sectionindustry'
import Whychooseus from '../components/Whychooseus'


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
      <Sectionindustry />
      <Whychooseus />
    </>
  )
}

export default Home