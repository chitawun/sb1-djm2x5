import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">ShoePalace</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">Home</a>
            <a href="#" className="text-gray-700 hover:text-black">Products</a>
            <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-black">Promotions</a>
            <a href="#" className="text-gray-700 hover:text-black">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">New Arrivals</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Promotions</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}