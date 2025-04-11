import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from 'react-router-dom';
const SideBarLayout = () => {
  return (
    <div className='flex'>
      <Navbar/>
      <div className='ml-72'>
      <main>
        <Outlet/>
      </main>
      </div>
      
    </div>
  )
}

export default SideBarLayout
