import React from 'react'
// import Navbar from "../Navbar/Navbar"
import Herosection from "../Herosection/Herosection"
import Features from "../Features/features"
import Phonesection from "../Phonesection/Phonesection"
import Whatweoffer from "../Whatweoffer/Whatweoffer"
import Testimonials from "../Testimonials/Testimonials"
import Faq from '../Faq/Faq'
import Footer from '../Footer/Footer'


const Landingpage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Herosection />
      <Features />
      <Phonesection />
      <Whatweoffer />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default Landingpage