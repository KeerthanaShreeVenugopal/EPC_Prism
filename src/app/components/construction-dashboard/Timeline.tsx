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
    <Card className="p-6 bg-slate-900 border-slate-800 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-white">Construction Timeline</h2>
        <p className="text-sm text-slate-400">
          Major phases and milestones
        </p>
      </div>

      <div className="space-y-6">
        {phases.map((phase, index) => {
          const isCompleted = phase.status === "completed";
          const isActive = phase.status === "active";
          const isUpcoming = phase.status === "upcoming";

          return (
            <div key={index} className="flex gap-4">
              
              {/* Timeline Icons */}
              <div className="flex flex-col items-center">
                <div>
                  {isCompleted && (
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  )}
                  {isActive && (
                    <Clock className="w-6 h-6 text-amber-400" />
                  )}
                  {isUpcoming && (
                    <Circle className="w-6 h-6 text-slate-600" />
                  )}
                </div>

                {index < phases.length - 1 && (
                  <div
                    className={`w-0.5 h-20 mt-2 ${
                      isCompleted ? "bg-green-400" : "bg-slate-700"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white mb-1">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {phase.startDate} - {phase.endDate}
                    </p>
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-xs ${
                      isCompleted
                        ? "bg-green-900/40 text-green-400"
                        : isActive
                        ? "bg-amber-900/40 text-amber-400"
                        : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}
                  >
                    {phase.progress}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isCompleted
                        ? "bg-green-400"
                        : isActive
                        ? "bg-amber-400"
                        : "bg-slate-600"
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