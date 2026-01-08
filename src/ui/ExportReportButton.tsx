"use client";

export function ExportReportButton() {
  return (
    <a
      href="/api/reports/monthly"
      target="_blank"
      className="px-4 py-2 bg-black text-white rounded"
    >
      Export Monthly Report
    </a>
  );
}
