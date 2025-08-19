import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Customer, Appointment, Service, CustomerFormData, AppointmentFormData } from "../types";

// API functions
const api = {
  // Customers
  getCustomers: async (): Promise<Customer[]> => {
    const response = await fetch("/api/customers");
    const data = await response.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  getCustomerByPhone: async (phone: string): Promise<Customer | null> => {
    const response = await fetch(`/api/customers?phone=${phone}`);
    const data = await response.json();
    if (!data.success) return null;
    return data.data;
  },

  createCustomer: async (customer: CustomerFormData): Promise<Customer> => {
    const response = await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    });
    const data = await response.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  // Appointments
  getAppointments: async (date?: string): Promise<Appointment[]> => {
    const url = date ? `/api/appointments?date=${date}` : "/api/appointments";
    const response = await fetch(url);
    const data = await response.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  createAppointment: async (appointment: AppointmentFormData): Promise<Appointment> => {
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment),
    });
    const data = await response.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  // Services
  getServices: async (): Promise<Service[]> => {
    const response = await fetch("/api/services");
    const data = await response.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },

  // Stylists
  getStylists: async (): Promise<{ id: string; name: string; specialties: string[] }[]> => {
    const response = await fetch("/api/stylists");
    const data = await response.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  },
};

// React Query hooks
export const useCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: api.getCustomers,
  });
};

export const useCustomerByPhone = (phone: string) => {
  return useQuery({
    queryKey: ["customer", phone],
    queryFn: () => api.getCustomerByPhone(phone),
    enabled: !!phone && phone.length >= 10,
  });
};

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
};

export const useAppointments = (date?: string) => {
  return useQuery({
    queryKey: ["appointments", date],
    queryFn: () => api.getAppointments(date),
  });
};

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.createAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: api.getServices,
  });
};

export const useStylists = () => {
  return useQuery({
    queryKey: ["stylists"],
    queryFn: api.getStylists,
  });
}; 