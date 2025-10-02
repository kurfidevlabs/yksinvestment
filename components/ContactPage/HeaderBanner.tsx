import React from 'react';

const HeaderBanner: React.FC = () => (
    <section 
      className="h-[220px] flex flex-col items-center justify-center text-center text-white relative px-4 bg-gradient-to-r from-[#0A2540] to-[#00BFA6]"
      aria-labelledby="banner-title"
    >
        <div className="relative z-10">
            <h1 id="banner-title" className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="text-base mt-3 text-gray-200 max-w-md">
                We’d love to hear from you — whether you’re a customer, partner, or investor.
            </p>
        </div>
    </section>
);

export default HeaderBanner;