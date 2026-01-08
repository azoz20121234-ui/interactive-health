import { getServerSession } from "next-auth";

export async function requireRole(role: string) {
  const session = await getServerSession();

  if (!session || session.user.role !== role) {
    throw new Error("Unauthorized");
  }

  return session;
}
