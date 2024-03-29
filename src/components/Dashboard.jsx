import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dashboard = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : ""} w-full`}>

      <Navbar sidebarToggle={sidebarToggle}
       setSidebarToggle={setSidebarToggle}/>
       
    </div>
  )
}

export default Dashboard
