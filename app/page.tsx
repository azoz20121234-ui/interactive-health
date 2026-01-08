export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">
        Smart School Clinic
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        A smart SaaS platform to manage school clinics, track student health,
        and detect risks early using data-driven insights.
      </p>

      <div className="flex gap-4">
        <a
          href="/dashboard"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Open Dashboard
        </a>

        <a
          href="#"
          className="px-6 py-3 border rounded-lg"
        >
          Request Demo
        </a>
      </div>
    </main>
  );
}
