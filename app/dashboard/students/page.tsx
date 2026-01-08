"use client";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/students")
      .then(res => res.json())
      .then(setStudents);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">الطلاب</h1>

      {students.map(s => (
        <div key={s.id} className="border p-4 mb-2 rounded">
          {s.name} — <b>{s.risk}</b>
        </div>
      ))}
    </div>
  );
}
