import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const totalStudents = await prisma.student.count();
  const totalVisits = await prisma.clinicVisit.count();

  const riskDistribution = await prisma.healthRiskScore.groupBy({
    by: ["level"],
    _count: true
  });

  return NextResponse.json({
    totalStudents,
    totalVisits,
    riskDistribution
  });
}
