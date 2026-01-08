import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const risk = await prisma.healthRiskScore.findUnique({
    where: { studentId: params.id }
  });

  if (!risk) {
    return NextResponse.json(
      { score: 0, level: "LOW" },
      { status: 200 }
    );
  }

  return NextResponse.json(risk);
}
