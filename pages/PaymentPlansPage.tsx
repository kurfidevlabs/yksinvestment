import React from 'react';
import HeaderBanner from '../components/PaymentPlansPage/HeaderBanner';
import PlanCardsGrid from '../components/PaymentPlansPage/PlanCardsGrid';
import FaqSection from '../components/PaymentPlansPage/FaqSection';

const PaymentPlansPage: React.FC = () => {
    return (
        <div>
            <HeaderBanner />
            <PlanCardsGrid />
            <FaqSection />
        </div>
    );
};

export default PaymentPlansPage;