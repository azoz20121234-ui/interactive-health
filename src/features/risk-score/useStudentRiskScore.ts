import useSWR from "swr";

export function useStudentRiskScore(studentId: string) {
  const { data, error } = useSWR(
    `/api/students/${studentId}/risk-score`
  );

  return {
    score: data?.score,
    level: data?.level,
    loading: !data && !error
  };
}
