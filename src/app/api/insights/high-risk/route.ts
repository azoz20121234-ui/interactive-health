import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const students = await prisma.healthRiskScore.findMany({
    where: { level: "HIGH" },
    include: {
      student: {
        select: { id: true, name: true, grade: true }
      }
    }
  });

  return NextResponse.json(students);
}
