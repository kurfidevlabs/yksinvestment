import React from 'react';
import SplitBanner from '../components/AboutUsPage/SplitBanner';
import MissionVision from '../components/AboutUsPage/MissionVision';
import ValuesGrid from '../components/AboutUsPage/ValuesGrid';
import TeamCarousel from '../components/AboutUsPage/TeamCarousel';

const AboutUsPage: React.FC = () => {
    return (
        <div>
            <SplitBanner />
            <MissionVision />
            <ValuesGrid />
            <TeamCarousel />
        </div>
    );
};

export default AboutUsPage;