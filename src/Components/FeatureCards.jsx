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
        <div class="flex-1 flex flex-col relative items-center justify-center ">
          {/* Image */}
          <img
            src={card1}
            alt=""
            class=" w-11/12 h-11/12
            rounded-md shadow"
          />
          {/* Sub-Card */}
          <div class="   shadow bg-white w-3/4 h-3/4 md:w-5/6 md:h-5/6  shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
            <div class="grid grid-cols-2 ">
              <p class="font-Crimson text-xl overflow-hidden">Sagano Forest</p>

              <div class=" flex items-center  justify-end">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
                <p class="text-xs ml-2 ">Japan</p>
              </div>
              <div class="flex">
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
              </div>
              <p class=" text-right">$8,750</p>
            </div>
          </div>
        </div>

        {/* Card #1 */}
        <div class="flex-1 flex flex-col relative items-center justify-center ">
          {/* Image */}
          <img
            src={card2}
            alt=""
            class=" w-11/12 h-11/12
            rounded-md shadow"
          />
          {/* Sub-Card */}
          <div class="   shadow bg-white w-3/4 h-3/4 md:w-5/6 md:h-5/6  shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
            <div class="grid grid-cols-2 ">
              <p class="font-Crimson text-xl overflow-hidden">Sahara Desert</p>

              <div class=" flex items-center  justify-end">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
                <p class="text-xs ml-2 ">Egypt</p>
              </div>
              <div class="flex">
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
              </div>
              <p class=" text-right">$6,250</p>
            </div>
          </div>
        </div>

        {/* Card #1 */}
        <div class="flex-1 flex flex-col relative items-center justify-center ">
          {/* Image */}
          <img
            src={card3}
            alt=""
            class=" w-11/12 h-11/12
            rounded-md shadow"
          />
          {/* Sub-Card */}
          <div class="   shadow bg-white w-3/4 h-3/4 md:w-5/6 md:h-5/6  shadow justify-between items-center transform -translate-y-1/2 rounded-md px-3 py-2">
            <div class="grid grid-cols-2 ">
              <p class="font-Crimson text-xl overflow-hidden">Mount Everest</p>

              <div class=" flex items-center  justify-end">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="w-3  " />
                <p class="text-xs ml-2 ">Himalayas</p>
              </div>
              <div class="flex">
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
                <FontAwesomeIcon icon={faStar} class="w-4 text-orange" />
              </div>
              <p class=" text-right ">$15,750</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
