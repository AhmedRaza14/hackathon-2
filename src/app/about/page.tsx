import Footer from "@/components/footer";
import { Navbar2 } from "@/components/Navbar2";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
 <Navbar2 />
      <div className="w-full h-auto  flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto items-stretch px-4 py-16 justify-center gap-9">
  {/* Left Section: Text Block */}
  <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0 flex flex-col justify-between">
    <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
    <p className="mt-6">
      A global brand with local beginnings, our story began in a small studio in South London in early 2014.
    </p>
    <button className="bg-[#F9F9F926] h-12 w-40 rounded-sm mt-10 py-4 text-white">
      View Collection
    </button>
  </div>

  {/* Right Section: Image */}
  <div className="w-full h-full md:w-2/5 flex items-center justify-center">
    <Image
      src="/Image Block.png"
      alt="About main"
      width={500} // Specify an appropriate width
      height={500}
      
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
    />
  </div>
</div>





      <div className="flex flex-col md:flex-row w-full h-auto items-stretch px-4 py-16 space-y-8 md:space-y-0">
  {/* Left Section: Image */}
  <Image
    src="/About second.png"
    alt="Service"
    width={500} // Specify an appropriate width
    height={500}
    className="w-full h-full md:w-2/5 object-cover transition-transform duration-300 ease-in-out"
  />

  {/* Right Section: Text Block */}
  <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20 flex flex-col justify-between">
    <h1 className="text-xl md:text-2xl text-custom-purple">
      Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
    </h1>
    <p className="text-custom-purple mt-6">
      When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
      Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique
      became the hotbed for the London interior design community.
    </p>
    <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">
      Get in Touch
    </button>
  </div>
</div>


     
<div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
  {[
    {
      img: "/Delivery.png",
      title: "Next day as standard",
      desc: "Order before 3pm and get your order the next day as standard",
    },
    {
      img: "/check.png",
      title: "Made by true artisans",
      desc: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      img: "/Purchase.png",
      title: "Unbeatable prices",
      desc: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      img: "/Sprout.png",
      title: "Recycled packaging",
      desc: "We use 100% recycled materials to ensure our footprint is more manageable",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
    >
      <Image
        src={item.img}
        alt={item.title}
        width={34} // Replace with the correct width
        height={34} // Replace with the correct height
        className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
      />
      <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
      <p className="text-custom-purple mt-4">{item.desc}</p>
    </div>
  ))}
</div>


      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-[#2A254B] h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
