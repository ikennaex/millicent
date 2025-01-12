import React from 'react'
import Navbar from "../Navbar/Navbar"
import Herosection from "../Herosection/Herosection"
import Features from "../Features/features"
import Phonesection from "../Phonesection/Phonesection"


const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Features />
      <Phonesection />
    </div>
  )
}

export default Landingpage