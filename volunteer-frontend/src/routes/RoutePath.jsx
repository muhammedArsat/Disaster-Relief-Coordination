import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import ReliefPage from '../pages/reliefPage/ReliefPage'
import SideBarLayout from '../layouts/sidebar/SideBarLayout'
const RoutePath = () => {
  return (
    <Router>
        <Routes>
          <Route element={<SideBarLayout/>}>
          <Route path='/reliefpage' element={<ReliefPage/>}/>
          </Route>
            
        </Routes>
    </Router>
  )
}

export default RoutePath
