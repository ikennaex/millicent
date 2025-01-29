import React from 'react'
// import "./navbar.css"
import { millicentlogo } from '../../../imports'

const Navbar = () => {

    const menuItems = [
        "Home","About", "Services", "Contact"
    ]
  return (
    <div className='container mx-auto mb-7'>
        <div className=' p-4 flex items-center shadow-md justify-start'>
        <img className='h-5' src= {millicentlogo} alt="" />
        <div className='hidden gap-20 mx-auto md:flex'>
            {menuItems.map(menu => (
                    <p className='nav-menu'>{menu}</p>
            ))}
        </div>

        </div>
    </div>
  )
}

export default Navbar