import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateStudentRiskScore } from "@/features/risk-score/updateRiskScore";

export async function POST(req: Request) {
  const body = await req.json();

  const visit = await prisma.clinicVisit.create({
    data: {
      studentId: body.studentId,
      symptoms: body.symptoms
    }
  });

  await updateStudentRiskScore(body.studentId);

  return NextResponse.json(visit);
}
