import React from "react"

const Footer = () => {
  return (
    <section>
      <div class="bg-lightGray text-darkBlue mt-12 lg:mt-28 px-16 ">
        <div class=" container grid-cols-2 grid lg:flex justify-between py-8 gap-8  items-start flex-wrap ">
          <div class="flex flex-col  w-4/5 lg:w-1/5  text-left">
            <h3 class="text-orange text-xl font-semibold self-start">
              Travel<span class="text-darkBlue ">Now</span>
            </h3>
            <p class="font-extralight  lg:block ">
              Lorem ipsum sit amet consect adipi si cing elit.
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
            <p class="text-xl font-bold">Support</p>
            <ul class="font-extralight">
              <li>Account</li>
              <li>Legal</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div class="flex flex-col items-start ">
            {" "}
            <p class="text-xl font-bold">Useful Pages</p>
            <ul class="font-extralight">
              <li>Deals</li>
              <li>FAQs</li>
              <li>Why Us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
