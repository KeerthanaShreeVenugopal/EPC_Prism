import { Card } from "../ui/card";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function Timeline() {
  const phases = [
    {
      phase: "Foundation & Excavation",
      status: "completed",
      startDate: "Jan 2024",
      endDate: "Mar 2024",
      progress: 100,
    },
    {
      phase: "Structural Framework",
      status: "completed",
      startDate: "Mar 2024",
      endDate: "Aug 2024",
      progress: 100,
    },
    {
      phase: "Building Envelope",
      status: "active",
      startDate: "Aug 2024",
      endDate: "Jun 2025",
      progress: 67,
    },
    {
      phase: "Interior Systems & MEP",
      status: "active",
      startDate: "Jan 2025",
      endDate: "Aug 2026",
      progress: 35,
    },
    {
      phase: "Interior Finishes",
      status: "upcoming",
      startDate: "Jun 2026",
      endDate: "Sep 2026",
      progress: 0,
    },
    {
      phase: "Final Inspections & Handover",
      status: "upcoming",
      startDate: "Sep 2026",
      endDate: "Oct 2026",
      progress: 0,
    },
  ];

  return (
    <Card className="p-6 border-slate-200 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-slate-900">Construction Timeline</h2>
        <p className="text-sm text-slate-500">Major phases and milestones</p>
      </div>
      <div className="space-y-4">
        {phases.map((phase, index) => {
          const isCompleted = phase.status === "completed";
          const isActive = phase.status === "active";
          const isUpcoming = phase.status === "upcoming";

          return (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  {isCompleted && (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  )}
                  {isActive && (
                    <Clock className="w-6 h-6 text-amber-500" />
                  )}
                  {isUpcoming && (
                    <Circle className="w-6 h-6 text-slate-300" />
                  )}
                </div>
                {index < phases.length - 1 && (
                  <div className={`w-0.5 h-16 mt-2 ${
                    isCompleted ? "bg-green-500" : "bg-slate-200"
                  }`} />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-slate-900 mb-1">{phase.phase}</h3>
                    <p className="text-sm text-slate-500">
                      {phase.startDate} - {phase.endDate}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs ${
                    isCompleted
                      ? "bg-green-100 text-green-700"
                      : isActive
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-500"
                  }`}>
                    {phase.progress}%
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isCompleted || isActive ? "bg-amber-500" : "bg-slate-300"
                    }`}
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
