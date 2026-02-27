import { Card } from "../ui/card";
import { TrendingUp, Users, Layers, Calendar } from "lucide-react";

export default function MetricsCards() {
  const metrics = [
    {
      icon: Layers,
      label: "Total Floors",
      value: "45",
      subtitle: "Including 3 basement levels",
      iconBg: "bg-blue-900/40",
      iconColor: "text-blue-400",
    },
    {
      icon: TrendingUp,
      label: "Progress",
      value: "67%",
      subtitle: "Ahead of schedule by 2 weeks",
      iconBg: "bg-green-900/40",
      iconColor: "text-green-400",
    },
    {
      icon: Users,
      label: "Workforce",
      value: "342",
      subtitle: "Active workers on site",
      iconBg: "bg-orange-900/40",
      iconColor: "text-orange-400",
    },
    {
      icon: Calendar,
      label: "Days Remaining",
      value: "218",
      subtitle: "Target: October 15, 2026",
      iconBg: "bg-purple-900/40",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;

        return (
          <Card
            key={index}
            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${metric.iconBg}`}>
                <Icon className={`w-6 h-6 ${metric.iconColor}`} />
              </div>
            </div>

            <div className="text-3xl mb-1 text-white">
              {metric.value}
            </div>

            <div className="text-sm text-slate-400 mb-1">
              {metric.label}
            </div>

            <div className="text-xs text-slate-500">
              {metric.subtitle}
            </div>
          </Card>
        );
      })}
    </div>
  );
}