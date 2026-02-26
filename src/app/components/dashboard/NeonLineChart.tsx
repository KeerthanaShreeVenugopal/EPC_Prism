import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

// 🔥 THIS IS THE IMPORTANT PART
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface TrendData {
  planned: number[];
  actual: number[];
  earned: number[];
  forecast: number[];
  baseline: number[];
}

export default function NeonLineChart({ trend }: { trend: TrendData }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[420px] flex flex-col">
      <h3 className="text-white mb-4 text-lg font-semibold">
        Financial Performance Trend
      </h3>

      <div className="flex-1 relative">
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Planned",
                data: trend.planned,
                borderColor: "#3b82f6",
                tension: 0.4,
                borderWidth: 2,
              },
              {
                label: "Actual",
                data: trend.actual,
                borderColor: "#ef4444",
                tension: 0.4,
                borderWidth: 2,
              },
              {
                label: "Earned",
                data: trend.earned,
                borderColor: "#10b981",
                tension: 0.4,
                borderWidth: 2,
              },
              {
                label: "Forecast",
                data: trend.forecast,
                borderColor: "#f59e0b",
                borderDash: [5, 5],
                tension: 0.4,
                borderWidth: 2,
              },
              {
                label: "Baseline",
                data: trend.baseline,
                borderColor: "#a855f7",
                tension: 0.4,
                borderWidth: 2,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: { color: "#aaa" },
              },
            },
            scales: {
              x: {
                ticks: { color: "#aaa" },
                grid: { color: "rgba(255,255,255,0.05)" },
              },
              y: {
                ticks: { color: "#aaa" },
                grid: { color: "rgba(255,255,255,0.05)" },
              },
            },
          }}
        />
      </div>
    </div>
  );
}