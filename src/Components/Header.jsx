import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [menuOpen, setmMenuOpen] = useState(false)

  const handleClick = () => {
    setmMenuOpen(!menuOpen)
  }

  return (
    <header id="home">
      <nav class="container flex items-center py-4 mt-4 sm:mt-12 text-base font-Nunito">
        <h3 class="text-orange text-xl font-semibold">
          Travel<span class="text-black ">Now</span>
        </h3>
        <ul class="hidden sm:flex flex-1 justify-center  items-center gap-6">
          <li class="cursor-pointer text-orange">Discover</li>
          <li class="cursor-pointer text-lightGray">Destination</li>
          <li class="cursor-pointer text-lightGray">About us</li>
        </ul>
        <button
          type="button"
          class="btn btn-orange sm:block hidden justify-center items-center "
        >
          Book a Tour
        </button>

        {/* Mobile */}
        <div class="flex sm:hidden flex-1 justify-end items-center">
          <FontAwesomeIcon
            icon={faBars}
            class="w-6 fixed z-20"
            type="button"
            onClick={handleClick}
          />
        </div>
        {menuOpen && (
          <div class="flex flex-col items-center justify-center bg-black bg-opacity-90 fixed top-0 right-0 h-full w-full z-30  text-white">
            <ul class="flex flex-col justify-center items-center sm:hidden gap-12 text-2xl text-orange">
              <li class="cursor-pointer ">Discover</li>
              <li class="cursor-pointer ">Destination</li>
              <li class="cursor-pointer ">About us</li>
            </ul>
            <FontAwesomeIcon
              icon={faTimes}
              class="w-6 mt-12 text-orange"
              onClick={handleClick}
            />
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
