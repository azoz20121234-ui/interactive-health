import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "أحمد", risk: "High" },
    { id: 2, name: "سارة", risk: "Medium" },
  ]);
}
