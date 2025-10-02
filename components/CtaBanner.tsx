
import React from 'react';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-12 px-8 bg-gradient-to-r from-[#0D1B2A] to-[#00BFA6]">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Ride into the Future?
        </h2>
        <p className="text-lg mb-8">Join the green revolution and discover the freedom of sustainable travel.</p>
        <button className="bg-[#FFB703] text-[#0D1B2A] text-lg font-bold py-3 px-8 rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-300 transform hover:scale-110">
          Shop E-Bikes Now
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;
