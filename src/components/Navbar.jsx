import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/images/logo.png';
import Sidebar from './Sidebar';


const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <nav className='bg-gray-800 px-4 py-3 flex justify-between ' >


<div className='my-2 mb-4 '>
                <h1 className='text-2x text-white font-bold group-focus:block top-full right-0'> <FontAwesomeIcon icon="fa-solid fa-bars" 
                onClick={()=>setSidebarToggle(!sidebarToggle)}/></h1>
            </div>
             <Sidebar sidebarToggle = {sidebarToggle} setSidebarToggle={setSidebarToggle} />
            <a className="flex flex-shrink-0 items-center mr-4 ml-64" href="/index.html">
                <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="React Jobs"
                />
            </a>

            <div className ="md:ml-auto">
              <div className ="flex space-x-2">
                <a href="/falcon.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Falcon9 </a>
                <a href="/falcon-heavy.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Falcon Heavy </a >
                   <a href="/dragon.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Dragon </a >
                   <a href="/starship.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Starship </a >
                   <a href="/Human Spaceflight.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Human Spacelight </a >
                   <a href="/rideshare.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Rideshare </a >
                   <a href="/stasheild.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Starsheild </a >
                   <a href="/starlink.html"
                  className ="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"> Starlink </a >
                     
              </div>
            </div>
          



            <div class='flex items-center gap-x-5'>
                <div className='relative md:w-65'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2 '>
                        <button className='p-1 focus:outline-none text-white md:text-black'>Search</button></span>
                    <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none' />
                </div>
            </div>
        </nav>




    )
}

export default Navbar
