import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import NotificationCard from './NotificationCard';

const Navbar = ({ isLogin }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false)
  const navigate = useNavigate()
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  const handleNotif = () => {
    if (windowDimensions.width > 1024)
      setShowNotif(!showNotif)
    else 
      navigate('/notification')
  }

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 md:mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
            href="#pablo"
          >
            SecondHand
          </a>
          <button onClick={() => setNavbarOpen(!navbarOpen)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-3" aria-expanded="false">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="divide-y lg:divide-y-0 flex flex-col w-full lg:w-auto lg:flex-row list-none lg:ml-auto lg:gap-3">
            <li className="nav-item">
              <div class="relative md:block lg:mr-3">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="search-navbar" className="my-3 lg:my-0 block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />
              </div>
            </li>
            {isLogin ?
              <>
                <li className="nav-item">
                  <Link to="/product"
                    className="h-full min-h-[37px] flex items-center text-xs uppercase font-bold leading-snughover:opacity-75 md:w-full"
                    href="#pablo"
                  >
                    <h5 className='lg:hidden'>Products</h5>
                    <FontAwesomeIcon icon={faBox} size={'2x'} className="leading-lg opacity-75 hidden lg:block" />
                  </Link>
                </li>
                <li className="nav-item">
                  <div
                    className="h-full min-h-[37px] flex items-center text-xs uppercase font-bold leading-snughover:opacity-75 md:w-full cursor-pointer"
                    onClick={handleNotif}
                  >
                    <h5 className='lg:hidden'>Notification</h5>
                    <FontAwesomeIcon icon={faBell} size={'2x'} className="leading-lg opacity-75 hidden lg:block" />
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/profile"
                    className="h-full min-h-[37px] flex items-center text-xs uppercase font-bold leading-snughover:opacity-75 md:w-full"
                    href="#pablo"
                  >
                    <h5 className='lg:hidden'>Profile</h5>
                    <FontAwesomeIcon icon={faUser} size={'2x'} className="mr-1 leading-lg opacity-75 hidden lg:block" />
                  </Link>
                </li>
              </>
              :
              <li className="nav-item">
                <Link to="/login"
                  className="shadow-md mb-5 block text-md text-center w-28 h-10 py-2 text-white hover:text-gray-700 rounded-lg bg-purple-700 hover:text-white hover:bg-blue-700 hover:font-bold lg:mt-0"
                >
                  {" "}
                  <span className="px-2">
                    <FiLogIn class="absolute z-10 text-center mx-5 mt-1" />
                  </span>
                  Masuk
                </Link>
              </li>
            }
          </ul>
        </div>
        {showNotif && windowDimensions.width>1024 ? <NotificationCard /> : ""}
      </div>
    </nav>

  )
}

export default Navbar