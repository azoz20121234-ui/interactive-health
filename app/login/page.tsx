"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function login() {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={login}
        className="bg-black text-white px-6 py-3 rounded"
      >
        تسجيل الدخول
      </button>
    </div>
  );
}
