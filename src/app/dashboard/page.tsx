"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentForm } from "@/components/AppointmentForm";
import { CustomerTable } from "@/components/CustomerTable";
import { AppointmentTable } from "@/components/AppointmentTable";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("booking");

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Dashboard</h1>
          <p className="text-xl text-gray-600">
            Manage customer data and appointment bookings
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="booking">Book Appointment</TabsTrigger>
            <TabsTrigger value="customers">Customer Records</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>

          <TabsContent value="booking" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Walk-in Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <AppointmentForm isWalkIn={true} />
              </div>

              {/* Online Booking Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <AppointmentForm isWalkIn={false} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customers">
            <CustomerTable />
          </TabsContent>

          <TabsContent value="appointments">
            <AppointmentTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 