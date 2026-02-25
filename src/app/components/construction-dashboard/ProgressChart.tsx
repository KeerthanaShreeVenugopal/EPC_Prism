import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function ProgressChart() {
  const data = [
    { month: "Jan", planned: 15, actual: 18 },
    { month: "Feb", planned: 28, actual: 32 },
    { month: "Mar", planned: 42, actual: 45 },
    { month: "Apr", planned: 55, actual: 58 },
    { month: "May", planned: 67, actual: 67 },
    { month: "Jun", planned: 75, actual: 72 },
    { month: "Jul", planned: 82, actual: 0 },
    { month: "Aug", planned: 88, actual: 0 },
    { month: "Sep", planned: 94, actual: 0 },
    { month: "Oct", planned: 100, actual: 0 },
  ];

  return (
    <Card className="p-6 border-slate-200 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-slate-900">Construction Progress Timeline</h2>
        <p className="text-sm text-slate-500">Monthly completion percentage - Planned vs Actual</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "12px",
              }}
            />
            <Legend />
            <Bar dataKey="planned" fill="#94a3b8" name="Planned %" radius={[8, 8, 0, 0]} />
            <Bar dataKey="actual" fill="#f59e0b" name="Actual %" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
