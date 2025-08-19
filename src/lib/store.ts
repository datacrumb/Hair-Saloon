import { create } from "zustand";
import { Customer, Appointment, Service } from "./types";

interface SalonStore {
  // State
  customers: Customer[];
  appointments: Appointment[];
  services: Service[];
  stylists: { id: string; name: string }[];
  isLoading: boolean;
  error: string | null;

  // Actions
  setCustomers: (customers: Customer[]) => void;
  addCustomer: (customer: Customer) => void;
  updateCustomer: (id: string, customer: Partial<Customer>) => void;
  deleteCustomer: (id: string) => void;

  setAppointments: (appointments: Appointment[]) => void;
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (id: string, appointment: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;

  setServices: (services: Service[]) => void;
  setStylists: (stylists: { id: string; name: string }[]) => void;

  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  // Computed
  getCustomerByPhone: (phone: string) => Customer | undefined;
  getAppointmentsByDate: (date: string) => Appointment[];
  getServiceById: (id: string) => Service | undefined;
}

export const useSalonStore = create<SalonStore>((set, get) => ({
  // Initial state
  customers: [],
  appointments: [],
  services: [],
  stylists: [],
  isLoading: false,
  error: null,

  // Customer actions
  setCustomers: (customers) => set({ customers }),
  addCustomer: (customer) => set((state) => ({ 
    customers: [...state.customers, customer] 
  })),
  updateCustomer: (id, customer) => set((state) => ({
    customers: state.customers.map(c => c.id === id ? { ...c, ...customer } : c)
  })),
  deleteCustomer: (id) => set((state) => ({
    customers: state.customers.filter(c => c.id !== id)
  })),

  // Appointment actions
  setAppointments: (appointments) => set({ appointments }),
  addAppointment: (appointment) => set((state) => ({
    appointments: [...state.appointments, appointment]
  })),
  updateAppointment: (id, appointment) => set((state) => ({
    appointments: state.appointments.map(a => a.id === id ? { ...a, ...appointment } : a)
  })),
  deleteAppointment: (id) => set((state) => ({
    appointments: state.appointments.filter(a => a.id !== id)
  })),

  // Service and stylist actions
  setServices: (services) => set({ services }),
  setStylists: (stylists) => set({ stylists }),

  // Loading and error actions
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  // Computed getters
  getCustomerByPhone: (phone) => {
    const { customers } = get();
    return customers.find(c => c.phone === phone);
  },

  getAppointmentsByDate: (date) => {
    const { appointments } = get();
    return appointments.filter(a => a.date === date);
  },

  getServiceById: (id) => {
    const { services } = get();
    return services.find(s => s.id === id);
  },
})); 