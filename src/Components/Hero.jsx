import React from "react"
import hero from "../Assets/hero.png"
import bg1 from "../Assets/bg1.png"

const Hero = () => {
  return (
    <section class="relative" >
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 ">
        {/* Content */}
        <div class="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left font-Nunito z-10">
          <h1 class="font-Crimson text-5xl md:text-6xl lg:text-7xl  text-darkBlue mb-6">
            Find your next place to travel
          </h1>
          <p class="mb-6 text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quia inventore sequi voluptas temporibus autem consequuntur
            cupiditate magnam voluptatibus!
          </p>
          {/* Input/Button */}
          <div class="flex  justify-start ">
            <input
              type="text"
              class="focus:outline-none flex-1  px-4 mr-5 lg:px-5 py-3 lg:mr-10 rounded-full text-orange shadow-md "
              placeholder="Traveling to..."
            ></input>
            <button class="btn btn-orange w-fill ">Search</button>
          </div>
        </div>
        {/* Image */}
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            src={hero}
            alt=""
            class="w-2/3 h-2/3 md:w-3/4 md:h-3/4 lg:w-full lg:h-full"
          />
        </div>
      </div>
      {/* BG-Image */}
      <div class=" hidden w-screen md:block absolute inset-y-1/2  ">
        <img src={bg1} alt="" class="w-screen" />
      </div>
    </section>
  )
}

export default Hero
