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
    <Card className="
      p-6 
      bg-white dark:bg-slate-900
      border border-slate-200 dark:border-slate-800
      rounded-2xl
      transition-colors duration-300
    ">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
          Construction Timeline
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
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
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  )}
                  {isActive && (
                    <Clock className="w-6 h-6 text-amber-500" />
                  )}
                  {isUpcoming && (
                    <Circle className="w-6 h-6 text-slate-400 dark:text-slate-600" />
                  )}
                </div>

                {index < phases.length - 1 && (
                  <div
                    className={`w-0.5 h-20 mt-2 ${
                      isCompleted
                        ? "bg-green-500"
                        : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {phase.startDate} - {phase.endDate}
                    </p>
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-xs ${
                      isCompleted
                        ? "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
                        : isActive
                        ? "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {phase.progress}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isCompleted
                        ? "bg-green-500"
                        : isActive
                        ? "bg-amber-500"
                        : "bg-slate-400 dark:bg-slate-600"
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