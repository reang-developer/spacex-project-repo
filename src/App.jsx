import Dashboard from "./components/Dashboard"
// import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";

//  import React from 'react'


 const App = () => {
  const [sidebarToggle,setSidebarToggle]=useState(false)
   return (
     <div className="flex">
       <Sidebar sidebarToggle={sidebarToggle}/>
       <Dashboard
       sidebarToggle={sidebarToggle}
       setSidebarToggle={setSidebarToggle}/>
     </div>
   )
 }
 
 export default App
 library.add(fab, fas, far)
 