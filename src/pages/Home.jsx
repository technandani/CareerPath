import React from 'react'
import Navbar from '../Components/common/Navbar'
import Dashboard from '../Components/Home/Dashboard'

const Home = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-scroll">
        <Navbar/>
        <Dashboard/>
      </div>
    </>
  )
}

export default Home
