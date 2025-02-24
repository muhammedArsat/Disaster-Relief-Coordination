import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/navbar/Navbar.jsx";
const SideBarLayout = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default SideBarLayout
