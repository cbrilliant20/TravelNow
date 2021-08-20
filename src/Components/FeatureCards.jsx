import React from "react"
import card1 from "../Assets/card1.png"
import card2 from "../Assets/card2.png"
import card3 from "../Assets/card3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons"

const FeatureCards = () => {
  return (
    <section>
      <div class="container flex flex-col md:flex-row items-center justify-center text-darkBlue mt-14 lg:mt-28 ">
        {/* Card #1 */}
        <div class="flex-1 flex flex-col relative items-center justify-center">
          {/* Image */}
          <img
            src={card1}
            alt=""
            class=" w-full h-full
            md:w-3/4 md:h-3/4 lg:w-4/5 lg:h-4/5
            rounded-md shadow"
          />
          {/* Sub-Card */}
          <div class="flex shadow bg-white w-3/4 h-3/4 md:w-2/3 md:h-2/3  shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
            <div class="flex flex-col ">
              <p class="font-Crimson text-2xl">Travel to Mountains</p>
              <div class="flex mt-4 py-2">
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
              </div>
            </div>
            <div class="flex flex-col items-right justify-between font-light ">
              <div class="flex items-center ">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
                <p class="text-xs ml-2 md:py-5">Brazil</p>
              </div>
              <p class="mt-6">$6,000</p>
            </div>
          </div>
        </div>

        {/* Card #2 */}
        <div class="flex-1 flex flex-col relative items-center justify-center">
          {/* Image */}
          <img
            src={card2}
            alt=""
            class=" w-full h-full
            md:w-3/4 md:h-3/4 lg:w-4/5 lg:h-4/5
            rounded-md shadow"
          />
          {/* Sub-Card */}
          <div class="  flex shadow bg-white w-3/4 h-3/4 md:w-2/3 md:h-2/3  shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
            <div class="flex flex-col ">
              <p class="font-Crimson text-2xl lg:py-4">Hike in Desert</p>
              <div class="flex mt-4 py-2  items-end ">
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
              </div>
            </div>
            <div class="flex flex-col items-right justify-between font-light ">
              <div class="flex items-center ">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
                <p class="text-xs ml-2 md:py-5 ">Egypt</p>
              </div>
              <p class="mt-6 self-end">$8,750</p>
            </div>
          </div>
        </div>

        {/* Card #3 */}
        <div class="flex-1 flex flex-col relative items-center justify-center">
          {/* Image */}
          <img
            src={card3}
            alt=""
            class=" w-full h-full
            md:w-3/4 md:h-3/4 lg:w-4/5 lg:h-4/5
            rounded-md shadow"
          />
          {/* Sub-Card */}
          <div class="flex shadow bg-white w-3/4 h-3/4 md:w-2/3 md:h-2/3  shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
            <div class="flex flex-col ">
              <p class="font-Crimson text-2xl">Camp in Mountains</p>
              <div class="flex mt-4 py-2">
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
              </div>
            </div>
            <div class="flex flex-col items-right justify-between font-light ">
              <div class="flex items-center ">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
                <p class="text-xs ml-2 md:py-5 ">Norway</p>
              </div>
              <p class="mt-6 self-end">$4,500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
