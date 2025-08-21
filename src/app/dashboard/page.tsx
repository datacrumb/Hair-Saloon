"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentTable } from "@/components/AppointmentTable";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Dashboard</h1>
          <p className="text-xl text-gray-600">
            Manage your appointments and view your booking history
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="appointments">My Appointments</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Appointments</h2>
                <p className="text-gray-600">View and manage your upcoming and past appointments</p>
              </div>
              <AppointmentTable />
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book New Appointment</h3>
              <p className="text-gray-600 mb-4">Schedule your next beauty treatment with us</p>
              <a 
                href="/book-appointment" 
                className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
              >
                Book Now
              </a>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">View Services</h3>
              <p className="text-gray-600 mb-4">Explore our range of beauty services and treatments</p>
              <a 
                href="/services" 
                className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
              >
                Browse Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 