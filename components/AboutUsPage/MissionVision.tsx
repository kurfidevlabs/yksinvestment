import React from 'react';

const MissionVision: React.FC = () => {
    return (
        <section className="bg-[#F6F8FA] py-16 px-4 md:px-20">
            <div className="container mx-auto grid md:grid-cols-2 gap-12">
                <div className="text-center md:text-left">
                    <span className="text-4xl">🌍</span>
                    <h2 className="text-3xl font-bold text-[#0A2540] my-3">Our Mission</h2>
                    <p className="text-gray-600 text-lg">
                        To make sustainable mobility and energy solutions affordable and accessible to everyone.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <span className="text-4xl">🚀</span>
                    <h2 className="text-3xl font-bold text-[#0A2540] my-3">Our Vision</h2>
                    <p className="text-gray-600 text-lg">
                        To lead Africa into a clean energy future with innovative, reliable, and customer-focused products.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;