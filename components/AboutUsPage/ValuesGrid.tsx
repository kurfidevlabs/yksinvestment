import React from 'react';

const valuesData = [
    { icon: "🤝", title: "Trust", desc: "We build relationships based on honesty and transparency." },
    { icon: "⚡", title: "Innovation", desc: "We constantly improve products for better performance." },
    { icon: "💡", title: "Sustainability", desc: "Every product we sell reduces carbon footprint." }
];

const ValueCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="bg-white p-6 rounded-lg text-center transform transition-transform hover:scale-105">
      <div className="text-4xl mb-4 inline-block bg-[#00BFA6]/10 p-3 rounded-full text-[#00BFA6]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#0D1B2A] mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
);


const ValuesGrid: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valuesData.map((value, index) => (
                        <ValueCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesGrid;