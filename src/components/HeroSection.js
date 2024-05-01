import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Image } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <>
      <div className="container">
     
        <div className="absolute z-10 hero-text">
          <p className="text-6xl md:text-8xl lg:text-9xl hero-title text-#121212-500 font-bold">
            Ardent
          </p>
          <p className="text-xs text-gray-500 xs:text-xs sm:text-xs lg:text-xl hero-subtitle">
            Our streetwear embodies the fire within those who dare.
          </p>
          <div>
            <Button
              radius="md"
              color=""
              className="hero-cta"
              endContent={<ArrowRightIcon size={20} />}
            >
              Shop Now
            </Button>
          </div>
        </div>

        <Image
          alt="44tag hero Image"
          src="./ardent.jpg"
          fallbackSrc="https://via.placeholder.com/1920x1080"
          className="z-0 w-full h-full object-cover hero-image"
        />
        
      </div>
    </>
  );
};

export default HeroSection;
