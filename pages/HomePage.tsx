import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedBikes from '../components/FeaturedBikes';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSlider from '../components/TestimonialSlider';
import CtaBanner from '../components/CtaBanner';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedBikes />
      <WhyChooseUs />
      <TestimonialSlider />
      <CtaBanner />
    </>
  );
};

export default HomePage;
