import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema, ApiResponse, Appointment } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const customerPhone = searchParams.get("customerPhone");

    // Build where clause for filtering
    const where: Prisma.AppointmentWhereInput = {};
    
    if (date) {
      where.date = date;
    }

    if (customerPhone) {
      where.customerPhone = customerPhone;
    }

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        customer: true,
        service: true,
        stylist: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Convert Decimal to number for API response
    const appointmentsWithNumberPrice = appointments.map(appointment => ({
      ...appointment,
      price: Number(appointment.price)
    }));

    return NextResponse.json<ApiResponse<Appointment[]>>({
      success: true,
      data: appointmentsWithNumberPrice
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
    const conflictingAppointment = await prisma.appointment.findFirst({
      where: {
        date: validatedData.date,
        time: validatedData.time,
        stylistId: validatedData.stylistId,
        status: {
          not: "CANCELLED"
        }
      }
    });

    if (conflictingAppointment) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: "Time slot is already booked"
      }, { status: 409 });
    }

    // Get or create customer
    let customer = await prisma.customer.findUnique({
      where: { phone: validatedData.customerPhone }
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          id: validatedData.customerId, // Use the provided customerId
          name: validatedData.customerName,
          phone: validatedData.customerPhone,
          email: validatedData.customerEmail || null,
        }
      });
    }

    // Get service and stylist details for denormalization
    const service = await prisma.service.findUnique({
      where: { id: validatedData.serviceId }
    });

    const stylist = await prisma.stylist.findUnique({
      where: { id: validatedData.stylistId }
    });

    if (!service || !stylist) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: "Service or stylist not found"
      }, { status: 404 });
    }

    // Create the appointment
    const newAppointment = await prisma.appointment.create({
      data: {
        customerId: customer.id,
        customerName: validatedData.customerName,
        customerPhone: validatedData.customerPhone,
        customerEmail: validatedData.customerEmail || null,
        serviceId: validatedData.serviceId,
        serviceName: service.name,
        stylistId: validatedData.stylistId,
        stylistName: stylist.name,
        date: validatedData.date,
        time: validatedData.time,
        duration: validatedData.duration,
        price: validatedData.price,
        status: "SCHEDULED",
        notes: validatedData.notes || null,
        isWalkIn: validatedData.isWalkIn,
      },
      include: {
        customer: true,
        service: true,
        stylist: true,
      }
    });

    // Update customer's total visits
    await prisma.customer.update({
      where: { id: customer.id },
      data: {
        totalVisits: {
          increment: 1
        }
      }
    });

    // Convert Decimal to number for API response
    const appointmentWithNumberPrice = {
      ...newAppointment,
      price: Number(newAppointment.price)
    };

    return NextResponse.json<ApiResponse<Appointment>>({
      success: true,
      data: appointmentWithNumberPrice,
      message: "Appointment booked successfully"
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
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