"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Calendar, User, Mail, Scissors } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { appointmentFormSchema, AppointmentFormData, Service } from "@/lib/types";
import { useCustomerByPhone, useCreateAppointment, useServices, useStylists } from "@/lib/hooks/useApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AppointmentFormProps {
  isWalkIn?: boolean;
  onSuccess?: () => void;
}

export function AppointmentForm({ isWalkIn = false, onSuccess }: AppointmentFormProps) {
  const { user } = useUser();
  const [searchPhone, setSearchPhone] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Get full name from Clerk user
  const getFullName = () => {
    if (!user) return "";
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    return `${firstName} ${lastName}`.trim();
  };

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      customerId: user?.id || "",
      customerName: getFullName(), // Auto-fill with Clerk's name
      customerPhone: "",
      customerEmail: user?.emailAddresses[0]?.emailAddress || "",
      serviceId: "",
      stylistId: "",
      date: "",
      time: "",
      notes: "",
      isWalkIn: isWalkIn,
    },
  });

  // API hooks
  const { data: customer, isLoading: customerLoading } = useCustomerByPhone(searchPhone);
  const { data: services, isLoading: servicesLoading } = useServices();
  const { data: stylists, isLoading: stylistsLoading } = useStylists();
  const createAppointmentMutation = useCreateAppointment();

  // Handle customer search
  const handleCustomerSearch = () => {
    const phone = form.getValues("customerPhone");
    if (phone && phone.length >= 10) {
      setSearchPhone(phone);
    }
  };

  // Auto-fill customer data when found
  if (customer && !form.getValues("customerName")) {
    form.setValue("customerName", customer.name);
  }

  // Get available time slots (simplified - in real app, check against existing appointments)
  const getAvailableTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      if (!user) {
        toast.error("Please sign in to book an appointment");
        return;
      }

      // Get service and stylist details
      const service = services?.find(s => s.id === data.serviceId);
      const stylist = stylists?.find(s => s.id === data.stylistId);

      if (!service || !stylist) {
        toast.error("Please select a valid service and stylist");
        return;
      }

      const appointmentData = {
        customerId: user.id,
        customerName: getFullName(), // Use Clerk's full name
        customerPhone: data.customerPhone,
        customerEmail: user.emailAddresses[0]?.emailAddress || "",
        serviceId: data.serviceId,
        serviceName: service.name,
        stylistId: data.stylistId,
        stylistName: stylist.name,
        date: data.date,
        time: data.time,
        duration: service.duration,
        price: Number(service.price),
        status: "SCHEDULED" as const,
        notes: data.notes || "",
        isWalkIn: data.isWalkIn,
      };

      await createAppointmentMutation.mutateAsync(appointmentData);
      
      toast.success("Appointment booked successfully!");
      form.reset();
      setSearchPhone("");
      onSuccess?.();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to book appointment");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {isWalkIn ? "Walk-in Appointment" : "Book Appointment"}
        </h2>
        <p className="text-gray-600">
          {isWalkIn 
            ? "Fill out the form below for walk-in service"
            : "Schedule your appointment online"
          }
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5" />
              Customer Information
            </h3>

            {/* Name display (read-only) */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-700">
                <User className="w-4 h-4" />
                <span className="font-medium">Name:</span>
                <span>{getFullName() || "No name available"}</span>
              </div>
            </div>

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="customerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <div className="flex gap-2">
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCustomerSearch}
                      disabled={customerLoading || !field.value || field.value.length < 10}
                    >
                      {customerLoading ? "Searching..." : "Search"}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email display (read-only) */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4" />
                <span className="font-medium">Email:</span>
                <span>{user?.emailAddresses[0]?.emailAddress || "No email available"}</span>
              </div>
            </div>

            {/* Customer found notification */}
            {customer && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-800">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Returning customer found!</span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Customer data has been auto-filled. Previous visits: {customer.totalVisits || 0}
                </p>
              </div>
            )}
          </div>

          {/* Service Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Scissors className="w-5 h-5" />
              Service Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="serviceId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service *</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        const service = services?.find(s => s.id === value);
                        setSelectedService(service || null);
                      }}
                      disabled={servicesLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services?.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            <div className="flex flex-col">
                              <span className="font-medium">{service.name}</span>
                              <span className="text-sm text-gray-500">
                                ${service.price} • {service.duration}min
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stylistId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stylist *</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      disabled={stylistsLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a stylist" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {stylists?.map((stylist) => (
                          <SelectItem key={stylist.id} value={stylist.id}>
                            <div className="flex flex-col">
                              <span className="font-medium">{stylist.name}</span>
                              <span className="text-sm text-gray-500">
                                {stylist.specialties.join(", ")}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Service details display */}
            {selectedService && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-blue-900">{selectedService.name}</h4>
                    <p className="text-sm text-blue-700">{selectedService.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-900">${selectedService.price}</p>
                    <p className="text-sm text-blue-700">{selectedService.duration} minutes</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Date and Time Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date *</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time *</FormLabel>
                    <Select onValueChange={field.onChange} disabled={!form.watch("date")}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {getAvailableTimeSlots().map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Notes */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any special requests, allergies, or additional information..."
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={createAppointmentMutation.isPending}
          >
            {createAppointmentMutation.isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Booking Appointment...
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 mr-2" />
                {isWalkIn ? "Create Walk-in Appointment" : "Book Appointment"}
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}