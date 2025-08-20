import { NextRequest, NextResponse } from "next/server";
import { customerSchema, ApiResponse, Customer } from "@/lib/types";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");
    const email = searchParams.get("email");

    const where: any = {};
    
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

    return NextResponse.json<ApiResponse<Customer[]>>({
      success: true,
      data: customers
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
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email || null,
        address: validatedData.address || null,
        dateOfBirth: validatedData.dateOfBirth ? new Date(validatedData.dateOfBirth) : null,
        notes: validatedData.notes || null,
      }
    });

    return NextResponse.json<ApiResponse<Customer>>({
      success: true,
      data: newCustomer,
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