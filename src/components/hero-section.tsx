import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-12 md:mb-20">
    {/* Text Section */}
    <div className="bg-[#2A254B] text-white p-12 md:p-24 flex flex-col justify-center h-full">
      <h1 className="font-clash text-4xl md:text-5xl font-medium mb-6">
        It started with a small idea
      </h1>
      <p className="text-lg mb-8 max-w-md">
        A global brand with local beginnings, our story began in a
        small studio in South London in early 2014
      </p>
      <Button className="self-start border-white bg-gray-300 hover:bg-white hover:text-[#2A254B] text-black">
        View collection
      </Button>
    </div>
  
    {/* Image Section */}
    <div className="bg-gray-200 h-full flex items-center justify-center">
      <Image
        src="/image Block.png"
        alt="Interior design showcase"
        width={500}
        height={600}
        className="object-cover w-full h-full"
      />
    </div>
  </section>
  
  );
}
