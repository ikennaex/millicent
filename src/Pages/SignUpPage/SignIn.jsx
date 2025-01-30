import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='container mx-auto '>
      <div className='p-7'>

        <div>
        <h2 className='font-bold text-sectionheader '>Login with Email</h2>
        <p>Enter your Email and Password to Login 
        to your account</p>
        </div>

      <form action="" className='flex flex-col gap-4 mt-7'>
            <input className='h-15 bg-customGray w-full p-5 rounded-xl' type="email" placeholder='Email' />
            <input className='h-15 bg-customGray w-full p-5 rounded-xl' type="password" placeholder='Password' />
            <Link to = "/">
            <p className='text-blue-500 font-bold'>Forgot Password ?</p>
            </Link>
            <button className='h-15 p-5 text-white font-bold bg-custompurple rounded-xl'>Login</button>
        </form>

        <div className='flex mt-7'>
            <p>Not registered ?  </p>
            <Link className='text-blue-500 font-bold' to = '/signup'>Create an account</Link>
        </div>
      </div>

    </div>
  )
}

export default SignIn
