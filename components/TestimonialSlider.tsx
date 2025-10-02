
import React, { useState, useEffect } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  { id: 1, name: 'Adebayo Johnson', location: 'Lagos', rating: 5, text: "The payment plan is a lifesaver! I got my e-bike without breaking the bank. The free charging is a huge plus. Highly recommend YkS!", avatar: 'https://picsum.photos/seed/person1/100/100' },
  { id: 2, name: 'Chiamaka Nwosu', location: 'Abuja', rating: 5, text: "I love my new solar generator. It's reliable during power cuts and completely silent. The team at YkS was incredibly helpful.", avatar: 'https://picsum.photos/seed/person2/100/100' },
  { id: 3, name: 'Musa Bello', location: 'Kano', rating: 4, text: "Great after-sales support. I had a minor issue with my bike and they fixed it promptly. Good to see a company that cares.", avatar: 'https://picsum.photos/seed/person3/100/100' },
  { id: 4, name: 'Fatima Aliyu', location: 'Port Harcourt', rating: 5, text: "Going green has never been easier. My daily commute is now eco-friendly and so much fun. The quality of the e-bike is top-notch!", avatar: 'https://picsum.photos/seed/person4/100/100' },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-[#FFB703]' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-[#F6F8FA] py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-12">
          What Our Riders Say
        </h2>
        <div className="relative w-full max-w-2xl mx-auto h-72">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full -mt-16 mb-4 border-4 border-white shadow-md" />
                <Rating rating={review.rating} />
                <p className="text-gray-600 italic my-4">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-[#0D1B2A]">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
          <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors">
            <ChevronLeftIcon className="w-6 h-6 text-[#0D1B2A]" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors">
            <ChevronRightIcon className="w-6 h-6 text-[#0D1B2A]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
