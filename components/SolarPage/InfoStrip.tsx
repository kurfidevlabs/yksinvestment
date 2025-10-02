import React from 'react';

const InfoStrip: React.FC = () => {
    return (
        <section className="bg-[#E6F9F6] py-10 px-4 md:px-20">
            <div className="container mx-auto text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#0A2540] mb-2">
                    Why Go Solar?
                </h2>
                <p className="text-base text-[#2D3748] max-w-3xl mx-auto md:mx-0">
                    Save on energy bills, enjoy clean power, and get reliable backup with our solar panels, batteries, and hybrid generators.
                </p>
            </div>
        </section>
    );
};

export default InfoStrip;