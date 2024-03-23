import React from 'react'
// import{FaHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = ({sidebarToggle}) => {
    return (
        <div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-gray-800 fixed h-full px-4 py-4 group`}>
            <div className='my-2 mb-4 '>
                <h1 className='text-2x text-white font-bold group-focus:block top-full right-0'> <FontAwesomeIcon icon="fa-solid fa-bars" 
                onClick={()=>setSidebarToggle(!sidebarToggle)}/> Admin Dashboard</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold text-sm '>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-dove" className='inline-block w-6 h-6 mr-2 -mt-2' />
                        FALCON9
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-weight-hanging" className='inline-block w-6 h-6 mr-2 -mt-2' />
                        FALCON HEAVY
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-dragon" className='inline-block w-6 h-6 mr-2 -mt-2' />
                        DRAGON
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-star" className='inline-block w-6 h-6 mr-2 -mt-2' />
                        STARSHIP
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-person-shelter" className='inline-block w-6 h-6 mr-2 -mt-2' />
                       HUMAN SPACEFLIGHT
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-briefcase" className='inline-block w-6 h-6 mr-2 -mt-2' />
                        RIDESHARE
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-star-of-life" className='inline-block w-6 h-6 mr-2 -mt-2' />
                        STARSHIELD
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-star" className='inline-block w-6 h-6 mr-2 -mt-2' />
                       STARLINK
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-plane" className='inline-block w-6 h-6 mr-2 -mt-2' />
                      MISSION
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-rocket" className='inline-block w-6 h-6 mr-2 -mt-2' />
                       LAUNCHES
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-user-tie" className='inline-block w-6 h-6 mr-2 -mt-2' />
                       CAREERS
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-up" className='inline-block w-6 h-6 mr-2 -mt-2' />
                       UPDATES
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='inline-block w-6 h-6 mr-2 -mt-2' />
                      SHOP
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
