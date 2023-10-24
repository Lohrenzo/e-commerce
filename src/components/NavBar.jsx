import { useState } from "react";

// Components
// import ToggleMode from "./ToggleMode";

import { Link } from "react-router-dom";

// Icons
import { FaBars } from 'react-icons/fa';
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

// import { useSelector } from 'react-redux';
// ${isDarkMode ? 'bg-[#0d1321]' : 'bg-[#3e5c76]'}


export default function NavBar() {
  // const isDarkMode = useSelector((state) => state.mode.isDarkMode);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className={`flex flex-wrap items-center justify-between fixed top-0 w-full lg:fixed z-30 px-0 lg:py-8 md:py-6 py-2 dark:bg-[#0d1321] bg-[#3e5c76] mb-3`}>
        <div className="w-full mx-12 flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between items-center lg:w-auto lg:flex-grow lg:gap-x-4 lg:justify-start">
            <Link
              className="lg:text-[1.3rem] md:text-[1rem] text-[0.9rem] font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              El-Carter!
            </Link>

            <div className="search rounded-lg p-2 hidden md:flex lg:flex flex-row items-center justify-center gap-0 w-full">
              <input type="text" placeholder="Search For Products" className="w-[50%] dark:bg-[#1D2D44] border border-[#1D2D44] focus:border-[#01497C] transition-all duration-150 lg:p-2 md:p-1 rounded-l-md outline-none focus:outline-none"/>
              <button className="lg:p-3 md:p-2 border border-[#1D2D44] active:border-[#01497C] bg-[#1D2D44] text-white rounded-r-md outline-none focus:outline-none">
                <BiSearchAlt2 />
              </button>
            </div>

            <button
              className="text-white cursor-pointer lg:text-[2rem] md:text-[1.8rem] text-[1.4rem] leading-none px-0 py-1 border-none rounded bg-transparent block lg:hidden md:hidden active:bg-transparent focus:bg-transparent outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <IoChevronUp /> : <IoChevronDown />}
            </button>
          </div>

          {/* <ToggleMode /> */}
          <div className="lg:dark:hidden hidden lg:flex lg:text-[1.3rem] md:text-[1rem] text-white text-[0.7rem] font-bold border-none p-3 m-0 opacity-70 dark:bg-[#0d1321] bg-[#3e5c76] gap-2 items-center justify-center">
            <BiSolidSun />
          </div>

          <div className="lg:hidden hidden lg:dark:flex lg:text-[1.3rem] md:text-[1rem] text-white text-[0.7rem] font-bold border-none p-3 m-0 opacity-70 dark:bg-[#0d1321] bg-[#3e5c76] gap-2 items-center justify-center">
            <BiSolidMoon />
          </div>

          <div
            className={
              "lg:flex lg:flex-grow-0 items-end text-white pr-0" +
              (navbarOpen ? " flex justify-end" : " hidden")
            }
            id="example-navbar-danger"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-0 lg:ml-auto">
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  Tweet
                </a>
              </li> */}
              <div className="lg:hidden rounded-lg flex flex-row gap-0 mt-2 w-full">
                <input type="text" placeholder="Search For Products" className="w-[100%] dark:bg-[#1D2D44] text-[gray] lg:text-base text-[0.8rem] border border-[#1D2D44] focus:border-[#01497C] transition-all duration-150 p-1 rounded-l-md outline-none focus:outline-none"/>
                <button className="p-2 border border-[#1D2D44] active:border-[#01497C] bg-[#1D2D44] rounded-r-md outline-none focus:outline-none">
                  <BiSearchAlt2 />
                </button>
              </div>
            {/* </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
