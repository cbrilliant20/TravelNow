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
          class="btn btn-orange sm:block hidden justify-center items-center "
        >
          Book a Tour
        </button>

        {/* Mobile */}
        <div class="flex md:lg flex-1 justify-end items-center">
          <FontAwesomeIcon
            icon={faBars}
            class="w-6 fixed z-20"
            type="button"
            onClick={handleClick}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
