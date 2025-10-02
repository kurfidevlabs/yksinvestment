import React from 'react';

interface ComparisonCardProps {
    name: string;
    features: { icon: string; label: string }[];
    image: string;
}

const comparisonData: ComparisonCardProps[] = [
    { name: 'YkS PowerWall 2.0', features: [{icon: "🔋", label: "200Ah Capacity"}, {icon: "⏱️", label: "5,000 Cycles"}, {icon: "⚡", label: "Fast Charging"}], image: 'https://novelsolar.com/wp-content/uploads/2025/08/PHOTO-2025-08-20-17-40-24-e1755898658749.jpg' },
    { name: 'Tesla Powerwall+', features: [{icon: "🔋", label: "250Ah Capacity"}, {icon: "⏱️", label: "6,000 Cycles"}, {icon: "⚡", label: "Very Fast Charging"}], image: 'http://www.hiteksolar.co.nz/cdn/shop/products/Hitek_PSG_700Wh_Pro_grande.jpg?v=1637300082' },
    { name: 'Enphase Encharge 10', features: [{icon: "🔋", label: "180Ah Capacity"}, {icon: "⏱️", label: "4,500 Cycles"}, {icon: "⚡", label: "Smart Charging"}], image: 'https://www.suluway.ng/wp-content/uploads/2024/10/IMG_0017-1.jpg' },
    { name: 'Generic Lithium', features: [{icon: "🔋", label: "150Ah Capacity"}, {icon: "⏱️", label: "3,000 Cycles"}, {icon: "⚡", label: "Standard Charging"}], image: 'https://me3energy.ng/media/catalog/product/cache/aee3773ba3df5dbc5c7b764f11e5adc0/c/a/canadian_solar_panels_price_1_1.png' },
];

const ComparisonCard: React.FC<ComparisonCardProps> = ({ name, features, image }) => (
    <div className="flex-shrink-0 w-[280px] bg-[#F6F8FA] rounded-xl shadow-sm p-5 border border-gray-200">
        <img src={image} alt={name} className="w-full h-24 object-cover rounded-lg mb-4"/>
        <h4 className="text-lg font-semibold text-[#0A2540] mb-3">{name}</h4>
        <ul className="space-y-2">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                    <span className="mr-2 text-lg">{feature.icon}</span>
                    {feature.label}
                </li>
            ))}
        </ul>
    </div>
);

const ComparisonStrip: React.FC = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-[#0A2540] mb-6">Compare Solar Batteries</h2>
                <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">
                    {comparisonData.map((data, i) => (
                        <ComparisonCard key={i} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonStrip;