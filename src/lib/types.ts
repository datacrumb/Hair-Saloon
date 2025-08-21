import { z } from "zod";

// Customer Schema
export const customerSchema = z.object({
  id: z.string(), // Clerk user_id
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").nullable().optional(),
  address: z.string().nullable().optional(),
  dateOfBirth: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  totalVisits: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Service Schema
export const serviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  duration: z.number(), // in minutes
  price: z.number(), // Will be converted to Decimal in API
  description: z.string().nullable().optional(),
  isActive: z.boolean().optional(),
});

// Stylist Schema
export const stylistSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().nullable().optional(),
  specialties: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
});

// Appointment Schema
export const appointmentSchema = z.object({
  id: z.string().optional(),
  customerId: z.string(),
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  customerEmail: z.string().email("Invalid email address").nullable().optional(),
  serviceId: z.string(),
  serviceName: z.string(),
  stylistId: z.string(),
  stylistName: z.string(),
  date: z.string(),
  time: z.string(),
  duration: z.number(),
  price: z.number(), // Will be converted to Decimal in API
  status: z.enum(["SCHEDULED", "COMPLETED", "CANCELLED", "NO_SHOW"]),
  notes: z.string().nullable().optional(),
  isWalkIn: z.boolean().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Form Schemas
export const customerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  address: z.string().optional(),
  dateOfBirth: z.string().optional(),
  notes: z.string().optional(),
});

export const appointmentFormSchema = z.object({
  customerId: z.string(), // Clerk user_id
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  customerEmail: z.string().email("Invalid email address").optional().or(z.literal("")),
  serviceId: z.string().min(1, "Please select a service"),
  stylistId: z.string().min(1, "Please select a stylist"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().optional(),
  isWalkIn: z.boolean(), // Remove .optional().default(false)
});

// API Response Types
export type Customer = z.infer<typeof customerSchema>;
export type Appointment = z.infer<typeof appointmentSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type Stylist = z.infer<typeof stylistSchema>;
export type CustomerFormData = z.infer<typeof customerFormSchema>;
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
} 