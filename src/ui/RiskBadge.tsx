type Props = {
  level: "LOW" | "MEDIUM" | "HIGH";
};

const colors = {
  LOW: "bg-green-100 text-green-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  HIGH: "bg-red-100 text-red-700"
};

export function RiskBadge({ level }: Props) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level]}`}
    >
      {level}
    </span>
  );
}
