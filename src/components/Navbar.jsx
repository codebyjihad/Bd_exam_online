import React from 'react'
import {Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-300 p-7 w-full text-white'>
        <div className='flex items-center justify-between container mx-auto'>
          {/* logo */}
          <div>
            <Link to='/' className='font-bold text-2xl text-gray-700'>Bd Exam <span className='text-green-500'>Online</span></Link>
          </div>
          {/* items */}
          <ul className='flex items-center gap-5'>
            <li className='text-gray-700 text-lg font-bold hover:text-green-500 transition-all'><NavLink to='/'>Home</NavLink></li>
            <li className='text-gray-700 text-lg font-bold hover:text-green-500 transition-all'><NavLink to='/class'>Class</NavLink></li>
            <li className='text-gray-700 text-lg font-bold hover:text-green-500 transition-all'><NavLink to='/aboutus'>About</NavLink></li>
          </ul>
          {/* register button */}
          <div>
              <Link to='/login' className="btn bg-green-500 text-white">Login</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar