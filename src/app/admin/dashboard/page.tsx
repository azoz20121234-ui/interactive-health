import { requireRole } from "@/lib/requireRole";

export default async function AdminDashboard() {
  await requireRole("ADMIN");

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}
