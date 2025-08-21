import Link from "next/link";
import { Star, Scissors, Palette, Sparkles, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Look with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Professional Care
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience the perfect blend of artistry and expertise. Our skilled stylists 
                create stunning looks that enhance your natural beauty and boost your confidence.
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
                  New clients get 20% off their first service. Book now and transform your look!
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
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From classic cuts to modern trends, we offer a comprehensive range of hair services 
              tailored to your unique style and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hair Cutting</h3>
              <p className="text-gray-600 mb-6">
                Precision cuts and styling that frame your face perfectly and enhance your features.
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
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hair Coloring</h3>
              <p className="text-gray-600 mb-6">
                Professional coloring services including highlights, balayage, and full color transformations.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Styling & Treatments</h3>
              <p className="text-gray-600 mb-6">
                Specialized treatments and styling for special occasions and everyday glamour.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Elegance Hair Salon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of experience with the latest techniques to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Stylists</h3>
              <p className="text-gray-600">
                Our team of certified professionals brings years of experience and creativity to every service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We use only premium, professional-grade products that are safe and effective for all hair types.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work with you to achieve the perfect look you envision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference that professional care makes.
          </p>
          <Link
            href="/dashboard"
            className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
