"use client";

import { useStudentRiskScore } from "./useStudentRiskScore";
import { RiskBadge } from "@/ui/RiskBadge";

export function StudentRiskCard({ studentId }: { studentId: string }) {
  const { score, level, loading } = useStudentRiskScore(studentId);

  if (loading) return <p>Loading risk score...</p>;

  return (
    <div className="rounded-lg border p-4 space-y-2">
      <h3 className="text-lg font-semibold">Health Risk</h3>

      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold">{score}</span>
        {level && <RiskBadge level={level} />}
      </div>

      <p className="text-sm text-gray-500">
        Calculated based on recent clinic visits
      </p>
    </div>
  );
}
