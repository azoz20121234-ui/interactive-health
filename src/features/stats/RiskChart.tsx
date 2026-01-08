"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useOverviewStats } from "./useOverviewStats";

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

export function RiskChart() {
  const { stats, loading } = useOverviewStats();
  if (loading) return null;

  const data = stats.riskDistribution.map((r: any) => ({
    name: r.level,
    value: r._count
  }));

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="name">
        {data.map((_: any, i: number) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
