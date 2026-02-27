import { Card } from "../ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

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
    <Card className="p-6 bg-slate-900 border-slate-800 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-white">
          Construction Progress Timeline
        </h2>
        <p className="text-sm text-slate-400">
          Monthly completion percentage - Planned vs Actual
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            
            <XAxis dataKey="month" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "12px",
                padding: "12px",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
            />

            <Legend wrapperStyle={{ color: "#cbd5e1" }} />

            <Bar
              dataKey="planned"
              fill="#475569"
              name="Planned %"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="actual"
              fill="#f59e0b"
              name="Actual %"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}