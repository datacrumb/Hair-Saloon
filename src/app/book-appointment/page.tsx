"use client";

import { AppointmentForm } from "@/components/AppointmentForm";

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600">
            Choose your preferred booking method and secure your appointment with us
          </p>
        </div>

        {/* Booking Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Walk-in Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Walk-in Booking</h2>
              <p className="text-gray-600">Book your appointment for immediate or same-day service</p>
            </div>
            <AppointmentForm isWalkIn={true} />
          </div>

          {/* Online Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Advance Booking</h2>
              <p className="text-gray-600">Schedule your appointment in advance for your preferred date and time</p>
            </div>
            <AppointmentForm isWalkIn={false} />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Booking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Service</h3>
              <p className="text-gray-600">Select from our range of beauty services including brows, lashes, skincare, and more.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Your Time</h3>
              <p className="text-gray-600">Choose a convenient time slot that works best for your schedule.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Booking</h3>
              <p className="text-gray-600">Review your details and confirm your appointment. We'll send you a confirmation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
