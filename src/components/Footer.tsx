import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShoePalace</h3>
            <p className="text-gray-400">Your premier destination for premium footwear.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Youtube /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-1"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 ShoePalace. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img src="https://raw.githubusercontent.com/tailwindui/tailwindui-syntax/master/src/img/payment-methods.png" alt="Payment methods" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}