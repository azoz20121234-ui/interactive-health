import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const visits = await prisma.clinicVisit.findMany({
    include: { student: true }
  });

  const report = visits.map(v => ({
    student: v.student.name,
    date: v.createdAt,
    symptoms: v.symptoms
  }));

  return NextResponse.json(report);
}
