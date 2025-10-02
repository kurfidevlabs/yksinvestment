import React from 'react';

const FormField: React.FC<{ label: string; type: string; placeholder: string; isTextArea?: boolean }> = ({ label, type, placeholder, isTextArea = false }) => {
    const commonClasses = "w-full h-12 px-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition";
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            {isTextArea ? (
                <textarea placeholder={placeholder} className={`${commonClasses} h-32 py-3`} rows={4}></textarea>
            ) : (
                <input type={type} placeholder={placeholder} className={commonClasses} />
            )}
        </div>
    );
};

const ContactForm: React.FC = () => {
    return (
        <form className="space-y-6">
            <FormField label="Full Name" type="text" placeholder="John Doe" />
            <FormField label="Email Address" type="email" placeholder="you@example.com" />
            <FormField label="Phone Number" type="tel" placeholder="+234 800 123 4567" />
            <FormField label="Message" type="text" placeholder="How can we help you today?" isTextArea />
            <div className="text-center">
                <button 
                    type="submit"
                    className="bg-[#00BFA6] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#06D6A0] transition-colors duration-300 transform hover:scale-105"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;