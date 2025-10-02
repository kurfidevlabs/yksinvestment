import React from 'react';
import HeaderBanner from '../components/ContactPage/HeaderBanner';
import ContactForm from '../components/ContactPage/ContactForm';
import ContactDetails from '../components/ContactPage/ContactDetails';
import MapSection from '../components/ContactPage/MapSection';

const ContactPage: React.FC = () => {
    return (
        <div>
            <HeaderBanner />
            <div className="bg-white py-16 px-4 md:px-20">
                <div className="container mx-auto max-w-4xl">
                    <ContactForm />
                </div>
            </div>
            <ContactDetails />
            <MapSection />
        </div>
    );
};

export default ContactPage;