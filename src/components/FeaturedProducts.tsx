import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    name: "Nike Air Max 270",
    price: 150,
    rating: 4.5,
    reviews: 128
  },
  {
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    name: "Adidas Ultraboost",
    price: 180,
    rating: 4.8,
    reviews: 245
  },
  {
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    name: "Puma RS-X",
    price: 120,
    rating: 4.3,
    reviews: 89
  },
  {
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    name: "Nike React Vision",
    price: 140,
    rating: 4.6,
    reviews: 167
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}