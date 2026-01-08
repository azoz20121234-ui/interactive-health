import { prisma } from "@/lib/prisma";
import { calculateHealthRiskScore } from "@/domain/services/riskScore.service";

export async function updateStudentRiskScore(studentId: string) {
  const visits = await prisma.clinicVisit.findMany({
    where: { studentId }
  });

  const formattedVisits = visits.map(v => ({
    date: v.createdAt,
    symptoms: v.symptoms as any
  }));

  const score = calculateHealthRiskScore(formattedVisits);

  const level =
    score <= 20 ? "LOW" :
    score <= 40 ? "MEDIUM" :
    "HIGH";

  await prisma.healthRiskScore.upsert({
    where: { studentId },
    update: { score, level },
    create: { studentId, score, level }
  });

  return { score, level };
}
