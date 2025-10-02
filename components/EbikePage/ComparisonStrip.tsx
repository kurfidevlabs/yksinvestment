import React from 'react';

interface ComparisonCardProps {
    name: string;
    features: { icon: string; label: string }[];
    image: string;
}

const comparisonData: ComparisonCardProps[] = [
    { name: 'Urban Glide X1', features: [{icon: "🔋", label: "60km Range"}, {icon: "⚡", label: "4h Charge"}, {icon: "🚴", label: "45km/h Top Speed"}], image: 'https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/news/2024/11/c241105deng/c241105deng_og.jpg' },
    { name: 'Mountain Peak Pro', features: [{icon: "🔋", label: "100km Range"}, {icon: "⚡", label: "6h Charge"}, {icon: "🚴", label: "60km/h Top Speed"}], image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1711551084-ANTHEM_PHOTON_BLUE_LEFT.jpg' },
    { name: 'Folding Flash', features: [{icon: "🔋", label: "50km Range"}, {icon: "⚡", label: "3h Charge"}, {icon: "🚴", label: "40km/h Top Speed"}], image: 'https://global.honda/en/motorcycle/news/shared/img/thumb_c250916.webp' },
    { name: 'Premium Volt', features: [{icon: "🔋", label: "120km Range"}, {icon: "⚡", label: "5h Charge"}, {icon: "🚴", label: "70km/h Top Speed"}], image: 'https://cdn.bikedekho.com/processedimages/ultraviolette/f77/source/f7768a816a13cca5.jpg' },
    { name: 'Trail Blazer 500', features: [{icon: "🔋", label: "80km Range"}, {icon: "⚡", label: "5.5h Charge"}, {icon: "🚴", label: "55km/h Top Speed"}], image: 'https://www.bikeleague.in/wp-content/uploads/2023/10/electric-motorcycles-scooters-advantages-and-disadvantages.jpg' },
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
                <h2 className="text-3xl font-bold text-[#0A2540] mb-6">Compare Top Picks</h2>
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
