interface ClinicVisit {
  createdAt: Date;
  symptoms?: string;
}

export function calculateHealthRiskScore(visits: ClinicVisit[]): number {
  let score = 0;

  // Base score: +2 per visit
  score += visits.length * 2;

  // Recent visits (within 7 days): +4
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const recentVisits = visits.filter(v => v.createdAt > sevenDaysAgo).length;
  score += recentVisits * 4;

  // High-risk symptoms: +5
  const highRiskSymptoms = ["fever", "difficulty breathing", "chest pain"];
  visits.forEach(v => {
    if (v.symptoms && highRiskSymptoms.some(s => v.symptoms?.includes(s))) {
      score += 5;
    }
  });

  // Recurring symptoms: +3
  const symptomCounts: Record<string, number> = {};
  visits.forEach(v => {
    if (v.symptoms) {
      symptomCounts[v.symptoms] = (symptomCounts[v.symptoms] || 0) + 1;
    }
  });
  Object.values(symptomCounts).forEach(count => {
    if (count > 1) score += 3;
  });

  // Reduce score if no recent visits: -5
  if (recentVisits === 0) score = Math.max(0, score - 5);

  return score;
}
