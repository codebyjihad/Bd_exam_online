import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
const Root = () => {
  return (
    <div>
       <h1>Navbar</h1>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Root