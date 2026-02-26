import { Card } from "../ui/card";
import { TrendingUp, Users, Layers, Calendar } from "lucide-react";

export default function MetricsCards() {
  const metrics = [
    {
      icon: Layers,
      label: "Total Floors",
      value: "45",
      subtitle: "Including 3 basement levels",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      label: "Progress",
      value: "67%",
      subtitle: "Ahead of schedule by 2 weeks",
      color: "bg-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      label: "Workforce",
      value: "342",
      subtitle: "Active workers on site",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Calendar,
      label: "Days Remaining",
      value: "218",
      subtitle: "Target: October 15, 2026",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card
            key={index}
            className="p-6 hover:shadow-xl transition-shadow duration-300 border-slate-200 rounded-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 ${metric.bgColor} rounded-xl`}>
                <Icon className={`w-6 h-6 ${metric.color.replace('bg-', 'text-')}`} />
              </div>
            </div>
            <div className="text-3xl mb-1 text-slate-900">
              {metric.value}
            </div>
            <div className="text-sm text-slate-600 mb-1">
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
