import React from 'react';

const HeaderBanner: React.FC = () => (
        <section 
            className="h-[260px] flex flex-col items-center justify-center text-center text-white relative px-4"
            style={{ backgroundImage: `url(https://novelsolar.com/wp-content/uploads/2025/08/PHOTO-2025-08-20-17-40-24-e1755898658749.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-labelledby="banner-title"
        >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10">
            <h1 id="banner-title" className="text-4xl md:text-5xl font-bold">Solar Energy Solutions</h1>
            <p className="text-lg mt-3 text-gray-200">Panels • Batteries • Generators</p>
        </div>
    </section>
);

export default HeaderBanner;