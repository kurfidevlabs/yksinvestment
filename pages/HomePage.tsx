import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedBikes from '../components/FeaturedBikes';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSlider from '../components/TestimonialSlider';
import CtaBanner from '../components/CtaBanner';
import { Page } from '../App';

interface HomePageProps {
  onNavigate?: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <FeaturedBikes />
      <WhyChooseUs />
      <TestimonialSlider />
      <CtaBanner />
    </>
  );
};

export default HomePage;
