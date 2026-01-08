import useSWR from "swr";

export function useHighRiskStudents() {
  const { data, error } = useSWR("/api/insights/high-risk");

  return {
    students: data,
    loading: !data && !error
  };
}
