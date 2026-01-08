import { StudentRiskCard } from "@/features/risk-score/StudentRiskCard";

export default function StudentPage({
  params
}: {
  params: { id: string };
}) {
  return (
    <div className="space-y-6">
      <StudentRiskCard studentId={params.id} />
      {/* باقي بيانات الطالب */}
    </div>
  );
}
