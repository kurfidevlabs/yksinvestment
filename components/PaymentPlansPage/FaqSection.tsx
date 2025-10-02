import React, { useState } from 'react';
import { ChevronDownIcon } from '../icons';

const faqData = [
    {
        q: "Can I pay earlier than scheduled?",
        a: "Absolutely! Early payments are welcome and can be made at any time without any penalties. This allows you to complete your payment plan sooner if you wish."
    },
    {
        q: "Do I need a guarantor?",
        a: "No guarantor is needed. Our payment plan is designed to be accessible. All you need is a valid form of identification and the initial 50% deposit to get started."
    },
    {
        q: "Which products qualify for the payment plan?",
        a: "Great news! All of our e-bikes and solar products are eligible for the payment plan. You can choose any item you like and take advantage of this flexible option."
    },
    {
        q: "What happens if I miss a payment?",
        // FIX: Corrected a typo in the object key from `a"` to `a:`.
        a: "We understand that things can happen. Please contact our support team as soon as possible to discuss your situation. We are here to help find a solution."
    }
];

const FaqItem: React.FC<{ item: { q: string, a: string } }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-[#0A2540]">{item.q}</span>
                <ChevronDownIcon className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <p className="text-gray-600 pb-5 px-6">{item.a}</p>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-20">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-[#0A2540] mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="bg-white rounded-lg shadow-md border border-gray-200">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;