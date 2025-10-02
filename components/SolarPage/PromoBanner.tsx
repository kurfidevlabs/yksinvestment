import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-16 bg-gradient-to-r from-[#0A2540] to-[#00BFA6]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between text-white">
        <h2 className="text-2xl font-bold max-w-lg mb-4 md:mb-0">
          ☀️ Free Consultation + 3-Year Warranty on All Solar Systems
        </h2>
        <button className="bg-[#FFB703] text-[#0A2540] text-base font-bold py-3 px-8 rounded-xl hover:bg-[#FFD166] transition-colors duration-300 transform hover:scale-105 flex-shrink-0">
          Book Consultation
        </button>
      </div>
    </section>
  );
};

export default PromoBanner;