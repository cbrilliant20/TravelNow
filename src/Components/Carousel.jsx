import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import card1 from "../Assets/card1.png"
import card2 from "../Assets/card2.png"
import card3 from "../Assets/card3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons"

const Carousel = () => {
  const handleDragStart = (e) => e.preventDefault()
  const star = [
    <div class="flex">
      <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
      <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
      <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
      <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
      <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
    </div>,
  ]
  const items = [
    <div class=" flex flex-col relative items-center justify-center ">
      {/* Image */}
      <img
        src={card1}
        alt=""
        class="
            rounded-md shadow"
      />
      {/* Sub-Card */}
      <div class="   shadow bg-white   shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
        <div class="grid grid-cols-2 ">
          <p class="font-Crimson text-xl overflow-hidden">Sagano Forest</p>
          <div class=" flex items-center  justify-end">
            <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
            <p class="text-xs ml-2 ">Japan</p>
          </div>
          {star}
          <p class=" text-right">$8,750</p>
        </div>
      </div>
    </div>,

    <div class="flex-1 flex flex-col relative items-center justify-center ">
      {/* Image */}
      <img
        src={card2}
        alt=""
        class="

            rounded-md shadow"
        onDragStart={handleDragStart}
        role="presentation"
      />
      {/* Sub-Card */}
      <div class="   shadow bg-white   shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
        <div class="grid grid-cols-2 ">
          <p class="font-Crimson text-xl overflow-hidden">Sahara Desert</p>
          <div class=" flex items-center  justify-end">
            <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
            <p class="text-xs ml-2 ">Egypt</p>
          </div>
          {star}
          <p class=" text-right">$6,250</p>
        </div>
      </div>
    </div>,

    <div class="flex-1 flex flex-col relative items-center justify-center ">
      {/* Image */}
      <img
        src={card3}
        alt=""
        class="
            rounded-md shadow"
      />
      {/* Sub-Card */}
      <div class="   shadow bg-white   shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
        <div class="grid grid-cols-2 ">
          <p class="font-Crimson text-xl overflow-hidden">Mount Everest</p>
          <div class=" flex items-center  justify-end">
            <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
            <p class="text-xs ml-2 ">Himalayas</p>
          </div>
          {star}
          <p class=" text-right ">$15,750</p>
        </div>
      </div>
    </div>,

    <div class="flex-1 flex flex-col relative items-center justify-center ">
      {/* Image */}
      <img
        src={card1}
        alt=""
        class="
            rounded-md shadow"
      />
      {/* Sub-Card */}
      <div class="   shadow bg-white   shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
        <div class="grid grid-cols-2 ">
          <p class="font-Crimson text-xl overflow-hidden">Sagano Forest</p>
          <div class=" flex items-center  justify-end">
            <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
            <p class="text-xs ml-2 ">Japan</p>
          </div>
          {star}
          <p class=" text-right">$8,750</p>
        </div>
      </div>
    </div>,

    <div class="flex-1 flex flex-col relative items-center justify-center ">
      {/* Image */}
      <img
        src={card2}
        alt=""
        class="
            rounded-md shadow"
      />
      {/* Sub-Card */}
      <div class="   shadow bg-white   shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
        <div class="grid grid-cols-2 ">
          <p class="font-Crimson text-xl overflow-hidden">Sahara Desert</p>
          <div class=" flex items-center  justify-end">
            <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
            <p class="text-xs ml-2 ">Egypt</p>
          </div>
          {star}
          <p class=" text-right">$6,250</p>
        </div>
      </div>
    </div>,

    <div class="flex-1 flex flex-col relative items-center justify-center ">
      {/* Image */}
      <img
        src={card3}
        alt=""
        class="
            rounded-md shadow"
      />
      {/* Sub-Card */}
      <div class="   shadow bg-white   shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
        <div class="grid grid-cols-2 ">
          <p class="font-Crimson text-xl overflow-hidden">Mount Everest</p>
          <div class=" flex items-center  justify-end">
            <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
            <p class="text-xs ml-2 ">Himalayas</p>
          </div>
          {star}
          <p class=" text-right ">$15,750</p>
        </div>
      </div>
    </div>,
  ]

  const responsive = {
    1: { items: 1 },
    640: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <div class="container mt-12 lg:mt-24  ">
      <AliceCarousel mouseTracking responsive={responsive} items={items} />
    </div>
  )
}

export default Carousel
