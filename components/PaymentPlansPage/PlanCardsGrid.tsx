import React from 'react';

const planData = [
    {
        title: "50% Upfront",
        details: "Pay half now, take your product home immediately.",
        icon: "💳",
    },
    {
        title: "3-Month Plan",
        details: "Pay the remaining balance in equal installments over 3 months.",
        icon: "📅",
    },
    {
        title: "4-Month Plan",
        details: "Spread your balance over 4 months, stress-free.",
        icon: "🕒",
    }
];

const PlanCard: React.FC<{ title: string; details: string; icon: string }> = ({ title, details, icon }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1">
        <div className="text-5xl mb-4 inline-block bg-gray-100 p-4 rounded-full">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{title}</h3>
        <p className="text-gray-600">{details}</p>
    </div>
);

const PlanCardsGrid: React.FC = () => {
    return (
        <section className="bg-[#F6F8FA] py-16 px-4 md:px-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {planData.map((plan, index) => (
                        <PlanCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlanCardsGrid;