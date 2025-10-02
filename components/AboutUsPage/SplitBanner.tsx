import React from 'react';

const SplitBanner: React.FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
            <div 
                className="bg-cover bg-center" 
                style={{ backgroundImage: 'url(https://picsum.photos/seed/plaza/800/600)' }}
                aria-label="YkS company plaza"
            ></div>
            <div className="bg-[#0A2540] text-white flex flex-col justify-center p-8 md:p-16">
                <h1 className="text-4xl font-bold mb-4">Empowering Mobility & Energy Freedom</h1>
                <p className="text-lg text-gray-300">
                    YkS Investment is redefining transportation and energy through sustainable e-bikes and solar solutions.
                </p>
            </div>
        </section>
    );
};

export default SplitBanner;