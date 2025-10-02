import React from 'react';

const teamData = [
    { name: 'John Doe', role: 'CEO & Founder', image: 'https://picsum.photos/seed/team1/300/300' },
    { name: 'Jane Smith', role: 'Head of Sales', image: 'https://picsum.photos/seed/team2/300/300' },
    { name: 'Michael Brown', role: 'Lead Engineer', image: 'https://picsum.photos/seed/team3/300/300' },
    { name: 'Emily White', role: 'Marketing Director', image: 'https://picsum.photos/seed/team4/300/300' },
    { name: 'David Green', role: 'Customer Support Lead', image: 'https://picsum.photos/seed/team5/300/300' },
];

const TeamCard: React.FC<{ name: string; role: string; image: string; }> = ({ name, role, image }) => (
    <div className="flex-shrink-0 w-[260px] bg-white rounded-2xl shadow-lg text-center overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-5">
            <h4 className="text-lg font-semibold text-[#0A2540]">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    </div>
);

const TeamCarousel: React.FC = () => {
    return (
        <section className="bg-[#F6F8FA] py-16 px-4 md:px-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-[#0A2540] mb-8 text-center md:text-left">Meet Our Team</h2>
                <div className="flex gap-8 overflow-x-auto pb-4 -mx-4 px-4">
                    {teamData.map((member, i) => (
                        <TeamCard key={i} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamCarousel;