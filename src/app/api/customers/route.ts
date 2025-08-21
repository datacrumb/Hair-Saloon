import { NextRequest, NextResponse } from "next/server";
import { customerSchema, ApiResponse, Customer } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");
    const email = searchParams.get("email");

    const where: Prisma.CustomerWhereInput = {};
    
    if (phone) {
      where.phone = phone;
    }

    if (email) {
      where.email = email;
    }

    const customers = await prisma.customer.findMany({
      where,
      include: {
        appointments: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 5 // Get last 5 appointments
        }
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Convert null values to undefined for API response
    const customersWithUndefinedNulls = customers.map(customer => ({
      ...customer,
      email: customer.email || undefined,
      address: customer.address || undefined,
      dateOfBirth: customer.dateOfBirth ? customer.dateOfBirth.toISOString() : undefined,
      notes: customer.notes || undefined,
    }));

    return NextResponse.json<ApiResponse<Customer[]>>({
      success: true,
      data: customersWithUndefinedNulls
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: "Internal server error"
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = customerSchema.parse(body);

    // Check if customer already exists
    const existingCustomer = await prisma.customer.findUnique({
      where: { phone: validatedData.phone }
    });

    if (existingCustomer) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: "Customer with this phone number already exists"
      }, { status: 409 });
    }

    const newCustomer = await prisma.customer.create({
      data: {
        id: validatedData.id, // Use the provided ID
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email || null,
        address: validatedData.address || null,
        dateOfBirth: validatedData.dateOfBirth ? new Date(validatedData.dateOfBirth) : null,
        notes: validatedData.notes || null,
      }
    });

    // Convert null values to undefined for API response
    const customerWithUndefinedNulls = {
      ...newCustomer,
      email: newCustomer.email || undefined,
      address: newCustomer.address || undefined,
      dateOfBirth: newCustomer.dateOfBirth ? newCustomer.dateOfBirth.toISOString() : undefined,
      notes: newCustomer.notes || undefined,
    };

    return NextResponse.json<ApiResponse<Customer>>({
      success: true,
      data: customerWithUndefinedNulls,
      message: "Customer created successfully"
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating customer:", error);
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