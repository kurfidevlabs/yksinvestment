
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="h-[600px] relative flex items-center px-4 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/071/073/142/small_2x/modern-electric-motorcycle-parked-on-city-street-at-dusk-photo.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Power Your Future — Ride & Live Sustainably.
          </h1>
          <p className="text-lg text-[#00BFA6] mt-4">
            Cut costs. Go green. Own the future with YkS E-Bikes & Solar.
          </p>
          <button className="mt-8 bg-[#00BFA6] text-white text-base font-semibold py-3 px-6 rounded-lg hover:bg-[#4CAF50] transition-colors duration-300 transform hover:scale-105">
            Explore E-Bikes
          </button>
        </div>
        {/* side image removed for cleaner hero on larger screens */}
      </div>
    </section>
  );
};

export default HeroSection;
