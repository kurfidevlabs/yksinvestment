import React from 'react';

const HeaderBanner: React.FC = () => (
    <section 
      className="h-[240px] flex flex-col items-center justify-center text-center text-white relative px-4 bg-gradient-to-r from-[#0A2540] to-[#00BFA6]"
      aria-labelledby="banner-title"
    >
        <div className="relative z-10">
            <h1 id="banner-title" className="text-4xl md:text-5xl font-bold">Flexible Payment Options</h1>
            <p className="text-lg mt-3 text-gray-200">Pay 50% upfront and spread the balance over 3–4 months</p>
        </div>
    </section>
);

export default HeaderBanner;