import React from 'react'

const Testimonials = () => {

  const testimonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque quis vitae ut porro vel a soluta blanditiis impedit placeat."
    },
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque quis vitae ut porro vel a soluta blanditiis impedit placeat."
    },
  ]
  return (
    <div className='container mx-auto'>
      <div className='p-7'>
        <h2 className='text-sectionheader text-center font-bold'>Testimonials</h2>

      <div className='pt-7 flex gap-2 flex-col'>
        {testimonials.map((item)=> {
          return (
            <div className='bg-customblue text-white  p-4 rounded-2xl'>
              <p>{item.text}</p>

              <div className='flex items-center gap-2 mt-6'>
              <div className='h-6 w-6 bg-white rounded-full'></div>
              <p className='font-bold'>{item.name}</p>
              </div>
            </div>
          )
        })}
      </div>
      </div>

    </div>
  )
}

export default Testimonials