import useSWR from "swr";

export function useOverviewStats() {
  const { data, error } = useSWR("/api/stats/overview");

  return {
    stats: data,
    loading: !data && !error
  };
}
