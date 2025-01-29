import React, { useState } from 'react'
// import "./navbar.css"
import { millicentlogo } from '../../../imports'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

    const menuItems = [
    {
      item: "About",
      link: "/"
    },
    {
      item: "Gift cards",
      link: "/"
    },
    {
      item: "Products",
      link: "/"
    },
    {
      item: "Explore",
      link: "/"
    },
    {
      item: "Contact ",
      link: "/"
    },
    ]

    const [open, setOpen] = useState(false)

    const handleToggle = () => {
      setOpen(!open)
    }
  return (
    <div className='container mx-auto mb-7'>
        <div className=' p-4 flex items-center shadow-md justify-between'>
        <img className='h-5' src= {millicentlogo} alt="" />
        <div className='hidden gap-20 mx-auto md:flex'>
            {menuItems.map(menu => (
                    <p className='nav-menu'>{menu.item}</p>
            ))}
        </div>

        <div onClick={handleToggle}>
          {open? <IoClose size={30} /> : < IoMdMenu size={30} /> }
        </div>

        </div>
        {open && 
        <div className='flex flex-col gap-5 px-4 mt-5'>
          {menuItems.map((items) => {
            return (
              <div className='border-b border-black'>
                <a  href={items.link} className='nav-menu'>{items.item}</a>
              </div>
            )
          })}
        </div>
        }

    </div>
  )
}

export default Navbar