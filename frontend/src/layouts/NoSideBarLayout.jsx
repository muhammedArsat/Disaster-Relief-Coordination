import React from 'react'
import { Outlet } from 'react-router-dom'
const NoSideBarLayout = () => {
  return (
    <div>
        <main>
            <Outlet/>
        </main>

    </div>
  )
}

export default NoSideBarLayout
