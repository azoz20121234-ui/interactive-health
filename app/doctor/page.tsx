'use client';

export default function DoctorPage() {
  const session =
    typeof window !== 'undefined' ? localStorage.getItem('ssc_session') : null;

  return (
    <main style={{ padding: 24 }}>
      <h1>🩺 لوحة الطبيب</h1>
      <p>تم تسجيل الدخول بنجاح (تجريبي).</p>
      <pre style={{ opacity: 0.85 }}>{session ?? 'no session'}</pre>
    </main>
  );
}
