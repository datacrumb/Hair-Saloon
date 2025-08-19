import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/lib/types";

const stylists = [
  { id: "1", name: "Sarah Johnson", specialties: ["Color Specialist", "Balayage Expert"] },
  { id: "2", name: "Michael Chen", specialties: ["Men's Cuts", "Fade Specialist"] },
  { id: "3", name: "Emily Rodriguez", specialties: ["Updos", "Special Occasions"] },
  { id: "4", name: "David Thompson", specialties: ["Women's Cuts", "Highlights"] }
];

export async function GET() {
  try {
    return NextResponse.json<ApiResponse<typeof stylists>>({
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