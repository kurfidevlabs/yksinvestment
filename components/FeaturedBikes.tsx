
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface Bike {
  id: number;
  name: string;
  price: string;
  image: string;
}

const bikes: Bike[] = [
  { id: 1, name: 'Urban Glide X1', price: '$1,299', image: 'https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/news/2024/11/c241105deng/c241105deng_og.jpg' },
  { id: 2, name: 'Mountain Peak Pro', price: '$2,499', image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1711551084-ANTHEM_PHOTON_BLUE_LEFT.jpg' },
  { id: 3, name: 'City Cruiser V2', price: '$999', image: 'https://cdn.bikedekho.com/processedimages/ultraviolette/f77/source/f7768a816a13cca5.jpg' },
  { id: 4, name: 'Trail Blazer 500', price: '$1,899', image: 'https://global.honda/en/motorcycle/news/shared/img/thumb_c250916.webp' },
  { id: 5, name: 'Commuter Express', price: '$1,150', image: 'https://www.bikeleague.in/wp-content/uploads/2023/10/electric-motorcycles-scooters-advantages-and-disadvantages.jpg' },
  { id: 6, name: 'Stealth Bomber', price: '$3,200', image: 'https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/news/2024/11/c241105deng/c241105deng_og.jpg' },
];

const FeaturedBikes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bikes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bikes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
        slides.push(bikes[(currentIndex + i) % bikes.length]);
    }
    return slides;
  };


  return (
    <section className="bg-[#F6F8FA] py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-8">
          Best-Selling E-Bikes
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
             <div className="flex justify-center gap-8 transition-transform duration-500 ease-in-out">
                {getVisibleSlides().map((bike, index) => (
                    <div key={`${bike.id}-${index}`} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
                         <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 transform hover:-translate-y-2">
                            <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold text-[#333333]">{bike.name}</h3>
                            <p className="text-xl font-bold text-[#00BFA6] my-2">{bike.price}</p>
                            <button className="w-full bg-[#FFB703] text-[#0D1B2A] font-bold py-2 px-4 rounded-lg hover:bg-[#4CAF50] hover:text-white transition-all duration-300">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
             </div>
          </div>

          <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition-colors">
            <ChevronLeftIcon className="w-6 h-6 text-[#0D1B2A]" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition-colors">
            <ChevronRightIcon className="w-6 h-6 text-[#0D1B2A]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
