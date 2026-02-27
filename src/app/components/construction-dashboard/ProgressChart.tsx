import { useEffect, useState } from "react";
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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

  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const axisColor = isDark ? "#cbd5e1" : "#475569";
  const tooltipBg = isDark ? "#1e293b" : "#ffffff";
  const tooltipBorder = isDark ? "#334155" : "#e2e8f0";
  const tooltipText = isDark ? "#ffffff" : "#0f172a";

  return (
    <Card className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-colors duration-300">
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
          Construction Progress Timeline
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Monthly completion percentage - Planned vs Actual
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            
            <XAxis dataKey="month" stroke={axisColor} />
            <YAxis stroke={axisColor} />

            <Tooltip
              contentStyle={{
                backgroundColor: tooltipBg,
                border: `1px solid ${tooltipBorder}`,
                borderRadius: "12px",
                padding: "12px",
                color: tooltipText,
              }}
              labelStyle={{ color: tooltipText }}
            />

            <Legend wrapperStyle={{ color: axisColor }} />

            <Bar
              dataKey="planned"
              fill={isDark ? "#475569" : "#94a3b8"}
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