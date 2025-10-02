import React from 'react';

const detailsData = [
    { icon: "📍", title: "Our Office", desc: "YkS Plaza, Central Business District, Abuja" },
    { icon: "📞", title: "Call Us", desc: "+234-800-123-4567" },
    { icon: "✉️", title: "Email Us", desc: "support@yks.com" }
];

const DetailCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="text-center">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-bold text-[#0A2540] mt-3 mb-1">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

const ContactDetails: React.FC = () => {
    return (
        <section className="bg-[#F6F8FA] py-16 px-4 md:px-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {detailsData.map((detail, index) => (
                        <DetailCard key={index} {...detail} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;