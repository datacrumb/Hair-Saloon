import { NextRequest, NextResponse } from "next/server";
import { customerSchema, ApiResponse, Customer } from "@/lib/types";

// In a real app, you'd use a proper database like PostgreSQL, MongoDB, etc.
// For now, we'll use a simple in-memory store
let customers: Customer[] = [
  {
    id: "1",
    name: "Jane Smith",
    phone: "555-0123",
    email: "jane.smith@email.com",
    address: "123 Main St, City, State 12345",
    dateOfBirth: "1990-05-15",
    notes: "Prefers Sarah for cuts, allergic to certain products",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "2",
    name: "Mike Johnson",
    phone: "555-0456",
    email: "mike.j@email.com",
    address: "456 Oak Ave, City, State 12345",
    dateOfBirth: "1985-08-22",
    notes: "Likes short cuts, prefers Michael",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-08"),
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (phone) {
      const customer = customers.find(c => c.phone === phone);
      if (!customer) {
        return NextResponse.json<ApiResponse<null>>({
          success: false,
          error: "Customer not found"
        }, { status: 404 });
      }
      return NextResponse.json<ApiResponse<Customer>>({
        success: true,
        data: customer
      });
    }

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

    const newCustomer: Customer = {
      ...validatedData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    customers.push(newCustomer);

    return NextResponse.json<ApiResponse<Customer>>({
      success: true,
      data: newCustomer,
      message: "Customer created successfully"
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