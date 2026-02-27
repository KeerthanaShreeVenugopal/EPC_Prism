import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", cost: 10 },
  { month: "Feb", cost: 12 },
  { month: "Mar", cost: 15 },
  { month: "Apr", cost: 14 },
  { month: "May", cost: 18 },
];

export default function KPIChart() {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl mb-16">
      <h2 className="text-2xl font-bold mb-6">Cost Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cost" stroke="#7c3aed" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}