import React from 'react'
import { giftcards, paybills } from '../../../imports'

const Whatweoffer = () => {
  const items = [

    {
      id: 1,
      text: "Buy & Sell Gift Cards",
      img: giftcards,
    },

    {
      id: 2,
      text: "Pay Bills",
      img: paybills,
    },
  ]
  return (
    <div className='container mx-auto'>
      <div className='px-7 py-7'>
        <h3 className='text-sectionheader text-center font-bold mb-7'>Enjoy the most <span className='text-custompurple'>Millicent</span> has to offer</h3>

        <div>
          <div className='flex flex-wrap justify-center gap-5'>
            {items.map((item) => (
              <div key={item.id} className='w-full md:w-1/2'>
                <div className=' flex flex-col p-5 bg-custompurple shadow-md rounded-3xl items-center'>
                  <div>
                  <img src={item.img} alt={item.text} className='h-40' />
                  </div>
                  <h4 className='text-2xl font-bold text-center text-white mt-3'>{item.text}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatweoffer