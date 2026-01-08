import { getServerSession } from "next-auth";

export async function requireRole(role: string) {
  const session = await getServerSession();

  if (!session || !session.user || (session.user as any).role !== role) {
    throw new Error("Unauthorized");
  }

  return session;
}
