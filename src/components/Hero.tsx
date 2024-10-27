import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "New Collection",
    description: "Discover our latest arrivals for the season"
  },
  {
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
    title: "Summer Sale",
    description: "Up to 50% off on selected items"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}