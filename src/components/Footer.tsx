import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Salon Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">Beauty Salon</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional beauty services with a focus on enhancing your natural beauty. 
              We offer comprehensive beauty treatments including brows, lashes, skincare, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Blogs & FAQs
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
                             <div className="flex items-center space-x-3">
                 <MapPin className="w-5 h-5 text-pink-500" />
                 <span className="text-gray-300">St. John Shopping Centre, Liverpool, UK</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Phone className="w-5 h-5 text-pink-500" />
                 <span className="text-gray-300">+44 151 792 0830</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Mail className="w-5 h-5 text-pink-500" />
                 <span className="text-gray-300">info@beautysalon.com</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Clock className="w-5 h-5 text-pink-500" />
                 <span className="text-gray-300">Mon-Fri: 09:00-17:00, Sat: 09:00-17:30</span>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 