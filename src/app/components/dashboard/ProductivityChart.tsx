import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function ProductivityChart({ dataPoints }: any) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
      <h3 className="text-white mb-4 text-lg font-semibold">
        Labor Productivity Trend
      </h3>

      <Bar
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Labor %",
              data: dataPoints,
              backgroundColor: "#a855f7",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { labels: { color: "#aaa" } },
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
  );
}