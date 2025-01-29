import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='container mx-auto'>
      <div className='p-7'>
        <div>
            <h2 className='font-bold text-sectionheader'>Create an Account</h2>
            <p>Enter your Email and set a  Password to 
            create an account</p>
        </div>

        <form action="" className='flex flex-col gap-4 mt-7'>
            <input className='h-15 bg-customGray w-full p-5 rounded-xl' type="email" placeholder='Email' />
            <input className='h-15 bg-customGray w-full p-5 rounded-xl' type="password" placeholder='Password' />
            <input className='h-15 bg-customGray w-full p-5 rounded-xl' type="password" placeholder='Confirm Password' />
            <button className='h-15 p-5 text-white font-bold bg-custompurple rounded-xl'>Create Account</button>
        </form>

        <div className='flex mt-7'>
            <p>Already a user? </p>
            <Link className='text-blue-500 font-bold' to = '/signin'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
