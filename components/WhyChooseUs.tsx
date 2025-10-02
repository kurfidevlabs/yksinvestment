
import React from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  text: string;
}

const infoCards: InfoCardProps[] = [
  { icon: "💰", title: "Flexible Payment Plans", text: "Pay 50% upfront, spread the rest easily." },
  { icon: "⚡", title: "Free Charging", text: "Charge your bike at our plaza for free." },
  { icon: "🌍", title: "Eco-Friendly", text: "Ride clean, protect the environment." },
  { icon: "🛠️", title: "After-Sales Support", text: "We stand by our products with reliable service." }
];

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:scale-105">
      <div className="text-4xl mb-4 inline-block bg-[#00BFA6]/10 p-3 rounded-full text-[#00BFA6]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-12">
          Why Choose YkS?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
