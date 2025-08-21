"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerTable } from "@/components/CustomerTable";
import { AppointmentTable } from "@/components/AppointmentTable";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">
            Manage customers, appointments, and salon operations
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="customers">Customer Records</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">All Appointments</h2>
                <p className="text-gray-600">View and manage all customer appointments</p>
              </div>
              <AppointmentTable />
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Records</h2>
                <p className="text-gray-600">View and manage customer information</p>
              </div>
              <CustomerTable />
            </div>
          </TabsContent>
        </Tabs>

        {/* Admin Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Appointments</h3>
            <p className="text-3xl font-bold text-pink-600">0</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Customers</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
            <p className="text-sm text-gray-600">Registered customers</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-green-600">£0</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
