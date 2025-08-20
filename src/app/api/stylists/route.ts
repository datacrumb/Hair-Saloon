import { NextRequest, NextResponse } from "next/server";
import { stylistSchema, ApiResponse, Stylist } from "@/lib/types";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get("isActive");
    const specialty = searchParams.get("specialty");

    const where: any = {};
    
    if (isActive !== null) {
      where.isActive = isActive === 'true';
    }

    if (specialty) {
      where.specialties = {
        has: specialty
      };
    }

    const stylists = await prisma.stylist.findMany({
      where,
      include: {
        appointments: {
          where: {
            status: "SCHEDULED"
          },
          orderBy: {
            date: 'asc'
          }
        }
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json<ApiResponse<Stylist[]>>({
      success: true,
      data: stylists
    });
  } catch (error) {
    console.error("Error fetching stylists:", error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: "Internal server error"
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = stylistSchema.parse(body);

    // Check if stylist already exists
    const existingStylist = await prisma.stylist.findUnique({
      where: { email: validatedData.email }
    });

    if (existingStylist) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: "Stylist with this email already exists"
      }, { status: 409 });
    }

    const newStylist = await prisma.stylist.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        specialties: validatedData.specialties || [],
        isActive: validatedData.isActive ?? true,
      }
    });

    return NextResponse.json<ApiResponse<Stylist>>({
      success: true,
      data: newStylist,
      message: "Stylist created successfully"
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating stylist:", error);
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