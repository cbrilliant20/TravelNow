import React from "react"
import img2 from "../Assets/img2.png"
import ticket from "../Assets/ticket.png"
import driver from "../Assets/driver.png"
import tour from "../Assets/tour.png"

const Services = () => {
  return (
    <section id="services">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 ">
        {/* Content */}
        <div class="flex flex-1 flex-col items-center lg:items-start text-left font-Nunito z-10">
          <h2 class="font-Crimson text-3xl md:text-4xl lg:text-5xl  text-darkBlue mb-6">
            Our Quality Services
          </h2>
          <div class="flex mt-10">
            <img
              src={ticket}
              alt=""
              class="mr-4 animate-pulse duration-500 w-1/3 h-1/3 md:w-1/4 md:h-1/4"
            />
            <div>
              <h2 class="font-Crimson text-3xl">Ticket</h2>
              <p class="text-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
                id.
              </p>
            </div>
          </div>

          <div class="flex mt-10">
            <img
              src={driver}
              alt=""
              class="mr-4  animate-pulse duration-500 w-1/3 h-1/3 md:w-1/4 md:h-1/4"
            />
            <div>
              <h2 class="font-Crimson text-3xl">Driver</h2>
              <p class="text-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
                id.
              </p>
            </div>
          </div>
          <div class="flex mt-10">
            <img
              src={tour}
              alt=""
              class="mr-4 animate-pulse duration-500 w-1/3 h-1/3 md:w-1/4 md:h-1/4"
            />
            <div>
              <h2 class="font-Crimson text-3xl">Tour</h2>
              <p class="text-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
                id.
              </p>
            </div>
          </div>
          <button class="btn btn-orange mt-10 hover:">Book Today</button>
        </div>

        {/* Image */}
        <div class=" flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            src={img2}
            alt=""
            class="w-2/3 h-2/3 md:w-3/4 md:h-3/4 lg:w-full lg:h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
