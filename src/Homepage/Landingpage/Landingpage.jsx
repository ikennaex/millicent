import React from 'react'
import Navbar from "../Navbar/Navbar"
import Herosection from "../Herosection/Herosection"
import Features from "../Features/features"
import Phonesection from "../Phonesection/Phonesection"
import Whatweoffer from "../Whatweoffer/Whatweoffer"


const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Features />
      <Phonesection />
      <Whatweoffer />
    </div>
  )
}

export default Landingpage