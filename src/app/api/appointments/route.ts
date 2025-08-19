import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema, ApiResponse, Appointment } from "@/lib/types";

// In-memory store for appointments
let appointments: Appointment[] = [
  {
    id: "1",
    customerId: "1",
    customerName: "Jane Smith",
    customerPhone: "555-0123",
    customerEmail: "jane.smith@email.com",
    serviceId: "1",
    serviceName: "Women's Haircut & Style",
    stylistId: "1",
    stylistName: "Sarah Johnson",
    date: "2024-01-20",
    time: "10:00",
    duration: 60,
    price: 65,
    status: "scheduled",
    notes: "First time client",
    isWalkIn: false,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const customerPhone = searchParams.get("customerPhone");

    let filteredAppointments = appointments;

    if (date) {
      filteredAppointments = filteredAppointments.filter(a => a.date === date);
    }

    if (customerPhone) {
      filteredAppointments = filteredAppointments.filter(a => a.customerPhone === customerPhone);
    }

    return NextResponse.json<ApiResponse<Appointment[]>>({
      success: true,
      data: filteredAppointments
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: "Internal server error"
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = appointmentSchema.parse(body);

    // Check for time conflicts
    const conflictingAppointment = appointments.find(a => 
      a.date === validatedData.date && 
      a.time === validatedData.time &&
      a.stylistId === validatedData.stylistId &&
      a.status !== "cancelled"
    );

    if (conflictingAppointment) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: "Time slot is already booked"
      }, { status: 409 });
    }

    const newAppointment: Appointment = {
      ...validatedData,
      id: Date.now().toString(),
      status: "scheduled",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    appointments.push(newAppointment);

    return NextResponse.json<ApiResponse<Appointment>>({
      success: true,
      data: newAppointment,
      message: "Appointment booked successfully"
    }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: error.message
      }, { status: 400 });
    }
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: "Internal server error"
    }, { status: 500 });
  }
} 