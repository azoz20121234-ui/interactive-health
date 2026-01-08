"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("auth") !== "true") {
      router.push("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-6">Smart Clinic</aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
