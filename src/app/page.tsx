import Link from "next/link";
import { Star, Scissors, Palette, Sparkles, Users, Award, Eye, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Enhance Your Natural{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Beauty
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional beauty services including brows, lashes, skincare, and more.
                Our expert team helps you look and feel your absolute best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/dashboard"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">Special Offer</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">20% Off First Visit</h3>
                <p className="text-pink-100 mb-4">
                  New clients get 20% off their first service. Book now and enhance your beauty!
                </p>
                <Link
                  href="/dashboard"
                  className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Claim Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Beauty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From brows and lashes to skincare and wellness, we offer comprehensive beauty services
              to enhance your natural beauty and boost your confidence. Located in St. John Shopping Centre, Liverpool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brows & Lashes</h3>
              <p className="text-gray-600 mb-6">
                Professional eyebrow extensions, lash extensions, and microblading for perfect brows.
              </p>
              <Link
                href="/services"
                className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skincare</h3>
              <p className="text-gray-600 mb-6">
                Advanced treatments including dermaplaning facials and anti-aging solutions.
              </p>
              <Link
                href="/services"
                className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hair Styling</h3>
              <p className="text-gray-600 mb-6">
                Professional hair styling, cuts, and color services for all occasions.
              </p>
              <Link
                href="/services"
                className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wellness</h3>
              <p className="text-gray-600 mb-6">
                Relaxing Indian aromatic massage and body treatments for complete wellness.
              </p>
              <Link
                href="/services"
                className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Our Beauty Salon
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are passionate about enhancing your natural beauty and helping you feel confident and beautiful.
                Our team of experienced beauty professionals stays up-to-date with the latest trends and techniques
                to provide you with exceptional service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-pink-600" />
                  <div>
                    <p className="font-semibold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-pink-600" />
                  <div>
                    <p className="font-semibold text-gray-900">5+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Professional & Experienced Team</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Premium Quality Products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Personalized Beauty Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Latest Beauty Techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Beauty?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Book your appointment today and experience the difference that professional beauty care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
