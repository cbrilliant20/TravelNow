import React from "react"
import img1 from "../Assets/img1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons"
import FeatureCards from "./FeatureCards"
import Carousel from "./Carousel"

const Feature = () => {
  return (
    <section id="destination">
      <div class="container flex flex-col-reverse lg:flex-row-reverse items-center gap-12 mt-14 lg:mt-36 ">
        {/* Content */}
        <div class="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left font-Nunito z-10">
          <h2 class="font-Crimson text-3xl md:text-4xl lg:text-5xl  text-darkBlue mb-6">
            Travel to any corner of the World
          </h2>
          <p class="mb-6 text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque
            asperiores dicta illo, delectus numquam?
          </p>

          <div class="flex flex-row items-center justify-between gap-4 mb-6 w-4/5">
            <div class=" ">
              <span class="text-orange text-4xl font-semibold">20</span> <br />
              Years <br />
              Experience
            </div>
            <div class=" ">
              <span class="text-orange text-4xl font-semibold">55</span> <br />
              Destination <br />
              Collaborations
            </div>
            <div class="">
              <span class="text-orange text-4xl font-semibold">500+</span>{" "}
              <br />
              Tourist <br />
              Destinations
            </div>
          </div>

          {/* Input/Button */}
          <div class="  flex  justify-start ">
            <button class="btn btn-darkBlue w-fill ">
              Explore Destination
            </button>
          </div>
        </div>
        {/* Image */}
        <div class=" flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            src={img1}
            alt=""
            class="w-2/3 h-2/3 md:w-3/4 md:h-3/4 lg:w-full lg:h-full  "
          />
        </div>
      </div>

      {/* Chevron */}
      <div class="hidden container md:flex items-center justify-end my-5">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          type="button"
          class="w-8 text-orange hover:text-darkBlue"
        />
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          type="button"
          class="w-8 ml-4 text-orange hover:text-darkBlue"
        />
      </div>
      {/* <FeatureCards /> */}
      <Carousel />
    </section>
  )
}

export default Feature
