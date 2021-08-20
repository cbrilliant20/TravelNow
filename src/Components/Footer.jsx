import React from "react"

const Footer = () => {
  return (
    <section>
      <div class="bg-lightGray text-darkBlue mt-12 lg:mt-28 px-16 ">
        <div class=" container flex  justify-between py-8 gap-8 lg:items-end items-start flex-wrap">
          <div class="flex flex-col  w-1/4 justify-center">
            <h3 class="text-orange text-xl font-semibold">
              Travel<span class="text-darkBlue ">Now</span>
            </h3>
            <p class="font-extralight hidden lg:block ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              suscipit unde saepe maiores nulla laborum.
            </p>
          </div>

          <div class="flex flex-col ">
            <p class="text-xl font-bold  ">Tour</p>
            <ul class="font-extralight  ">
              <li>Thailand</li>
              <li>Canada</li>
              <li>Korea</li>
              <li>Italy</li>
            </ul>
          </div>

          <div class="flex flex-col   ">
            {" "}
            <p class="text-xl font-bold">Tour</p>
            <ul class="font-extralight">
              <li>Thailand</li>
              <li>Canada</li>
              <li>Korea</li>
              <li>Italy</li>
            </ul>
          </div>

          <div class="flex flex-col ">
            {" "}
            <p class="text-xl font-bold">Tour</p>
            <ul class="font-extralight">
              <li>Thailand</li>
              <li>Canada</li>
              <li>Korea</li>
              <li>Italy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
