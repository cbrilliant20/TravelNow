import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header id="home">
      <nav class="container flex items-center py-4 mt-4 sm:mt-12 text-base font-Nunito">
        <div class="flex items-center justify-between w-full">
          <h3 class="text-orange text-xl font-semibold justify-end ">
            Travel<span class="text-black ">Now</span>
          </h3>
          <div class="flex items-center gap-10 ">
            <ul class="hidden sm:flex  justify-center  items-center gap-6">
              <li class="cursor-pointer text-orange">
                <a href="#home">Discover</a>
              </li>
              <li class="cursor-pointer text-lightGray">
                <a href="#destination">Destinations</a>
              </li>
              <li class="cursor-pointer text-lightGray">
                <a href="#services">Services</a>
              </li>
            </ul>
            <button
              type="button"
              class="btn btn-orange  sm:block hidden justify-end items-center "
            >
              Book a Tour
            </button>
          </div>
        </div>
        {/* Mobile */}
        <div class="flex md:lg  justify-end items-center">
          <FontAwesomeIcon
            icon={faBars}
            class="w-6 fixed z-20 sm:hidden"
            type="button"
            onClick={handleClick}
          />
        </div>

        {menuOpen && (
          <div class="flex flex-col items-center justify-center bg-black bg-opacity-90 fixed top-0 right-0 h-full w-full z-30  ">
            <ul class="flex flex-col justify-center items-center sm:hidden gap-12 text-2xl text-white">
              <li class="cursor-pointer ">
                <a href="#home" onClick={handleClick}>
                  Discover
                </a>
              </li>

              <li class="cursor-pointer ">
                <a href="#destination" onClick={handleClick}>
                  Destinations
                </a>
              </li>
              <li class="cursor-pointer ">
                <a href="#services" onClick={handleClick}>
                  Services
                </a>
              </li>
            </ul>
            <FontAwesomeIcon
              icon={faTimes}
              class="w-6 mt-12 text-white"
              onClick={handleClick}
            />
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
