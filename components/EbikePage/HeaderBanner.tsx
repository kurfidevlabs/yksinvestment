import React from 'react';

const HeaderBanner: React.FC = () => (
    <section 
      className="h-[280px] flex flex-col items-center justify-center text-center text-white relative px-4"
      style={{ backgroundImage: `url(https://picsum.photos/seed/bike-banner/1920/1080)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      aria-labelledby="banner-title"
    >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10">
            <h1 id="banner-title" className="text-4xl md:text-5xl font-bold">Explore Our E-Bikes</h1>
            <p className="text-lg mt-4 max-w-md">Affordable. Sustainable. Powerful rides for the future.</p>
        </div>
    </section>
);

export default HeaderBanner;
