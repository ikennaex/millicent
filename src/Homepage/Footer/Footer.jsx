import React from 'react'
import { millicentlogo } from '../../../imports'
import { FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  const footerMenu = [
    {
      item: "About",
      link: "",
    },
    {
      item: "Gift Cards",
      link: "",
    },
    {
      item: "Products",
      link: "",
    },
    {
      item: "Explore",
      link: "",
    },
    {
      item: "Contact Us",
      link: "",
    },
  ]

  const date = new Date().getFullYear()
  return (
    <div className='container mx-auto bg-[#efefef]'>
      <div className='p-7'>
        <img className='h-5 mb-5' src= {millicentlogo} alt="logo" />

        <div>
          {footerMenu.map ((items) => {
            return (
              <div key={items.index}>
                <a className='text-sm' href={items.link}>{items.item}</a>
              </div>
            )
          })}
        </div>

        <div className='mt-4 font-bold flex flex-col items-center'>
          <p>Follow us</p>

          <div className='flex gap-3 mt-3'>
            <FaFacebook size = {25} />
            <FaInstagram size = {25} />
          </div>
        </div>

        <div className='text-center text-sm mt-7'>
          <p>Made with 💜 by xMotivo Technologies Limited</p>
          <p>Copyright Millicent @ {date}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer