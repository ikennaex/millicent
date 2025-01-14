import React from 'react'
import {fast, growth, energy} from "../../../imports"

const features = () => {
  const features = [
    {
      id:1,
      text: "Best Market Rates",
      img: growth
    },
    {
      id:2,
      text: "Hassle Free Trading",
      img: fast
    },
    {
      id:3,
      text: "Instant Crediting",
      img: energy
    },
  ]
  return (
    <div className='container mx-auto bg-[#efefef]'>
      <div className=' py-7 px-7'>
        <h2 className='text-center font-bold text-sectionheader'>Trade with <span className='text-custompurple'>Millicent</span></h2>

        <div className='my-7'>
          {features.map((feature) => {
            return (
          <div key = {feature.id} className='bg-[#012445] mb-7 rounded-3xl text-center text-white py-9 flex flex-col items-center '>
            <img src= {feature.img} alt="" />
            <h3>{feature.text}</h3>
          </div>
          )
          })}
        </div>
      </div>

    </div>
  )
}

export default features