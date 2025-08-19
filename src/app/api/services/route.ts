import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, Service } from "@/lib/types";

const services: Service[] = [
  {
    id: "1",
    name: "Women's Haircut",
    category: "Hair Cutting",
    duration: 60,
    price: 65,
    description: "Professional cut and style tailored to your face shape and lifestyle"
  },
  {
    id: "2",
    name: "Men's Haircut",
    category: "Hair Cutting",
    duration: 45,
    price: 35,
    description: "Classic or modern cuts with precision styling"
  },
  {
    id: "3",
    name: "Kid's Haircut (12 & under)",
    category: "Hair Cutting",
    duration: 30,
    price: 25,
    description: "Gentle and fun haircuts for children"
  },
  {
    id: "4",
    name: "Full Color",
    category: "Hair Coloring",
    duration: 150,
    price: 120,
    description: "Complete hair color transformation with premium products"
  },
  {
    id: "5",
    name: "Highlights",
    category: "Hair Coloring",
    duration: 120,
    price: 140,
    description: "Partial or full highlights for dimension and brightness"
  },
  {
    id: "6",
    name: "Balayage",
    category: "Hair Coloring",
    duration: 180,
    price: 200,
    description: "Hand-painted highlights for natural-looking dimension"
  },
  {
    id: "7",
    name: "Blowout & Style",
    category: "Styling & Treatments",
    duration: 45,
    price: 45,
    description: "Professional blowout with your choice of styling"
  },
  {
    id: "8",
    name: "Updo/Special Occasion",
    category: "Styling & Treatments",
    duration: 90,
    price: 85,
    description: "Elegant styling for weddings, proms, and special events"
  }
];

export async function GET() {
  try {
    return NextResponse.json<ApiResponse<Service[]>>({
      success: true,
      data: services
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: "Internal server error"
    }, { status: 500 });
  }
} 