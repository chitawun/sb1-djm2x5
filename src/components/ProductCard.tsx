import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
}

export default function ProductCard({ image, name, price, rating, reviews }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-2 right-2 space-y-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}