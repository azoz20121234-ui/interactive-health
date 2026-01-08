export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        لوحة تحكم العيادة المدرسية
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="عدد الطلاب" value="420" />
        <StatCard title="حالات خطرة" value="18" />
        <StatCard title="تنبيهات اليوم" value="6" />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h3 className="text-gray-500 mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
