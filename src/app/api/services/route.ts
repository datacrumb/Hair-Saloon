import { NextRequest, NextResponse } from "next/server";
import { serviceSchema, ApiResponse, Service } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const isActive = searchParams.get("isActive");

    const where: Prisma.ServiceWhereInput = {};
    
    if (category) {
      where.category = category;
    }

    if (isActive !== null) {
      where.isActive = isActive === 'true';
    }

    const services = await prisma.service.findMany({
      where,
      orderBy: {
        name: 'asc',
      },
    });

    // Convert Decimal to number and null to undefined for API response
    const servicesWithNumberPrice = services.map(service => ({
      ...service,
      price: Number(service.price),
      description: service.description || undefined,
    }));

    return NextResponse.json<ApiResponse<Service[]>>({
      success: true,
      data: servicesWithNumberPrice
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: "Internal server error"
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = serviceSchema.parse(body);

    const newService = await prisma.service.create({
      data: {
        name: validatedData.name,
        category: validatedData.category,
        duration: validatedData.duration,
        price: validatedData.price,
        description: validatedData.description || null,
        isActive: validatedData.isActive ?? true,
      }
    });

    // Convert Decimal to number and null to undefined for API response
    const serviceWithNumberPrice = {
      ...newService,
      price: Number(newService.price),
      description: newService.description || undefined,
    };

    return NextResponse.json<ApiResponse<Service>>({
      success: true,
      data: serviceWithNumberPrice,
      message: "Service created successfully"
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error);
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