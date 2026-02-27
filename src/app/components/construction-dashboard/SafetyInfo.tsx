import { Card } from "../ui/card";
import { ShieldCheck, HardHat, AlertTriangle, Award } from "lucide-react";

export default function SafetyInfo() {
  return (
    <Card className="
      p-6 
      border border-slate-200 dark:border-slate-800 
      rounded-2xl 
      bg-gradient-to-br 
      from-white to-slate-100 
      dark:from-slate-900 dark:to-slate-950
      transition-colors duration-300
    ">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
          Safety & Compliance
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Our commitment to site safety
        </p>
      </div>

      <div className="space-y-4">

        {/* Safety Record */}
        <div className="
          flex items-start gap-4 p-4 
          bg-white dark:bg-slate-800 
          rounded-xl 
          border border-slate-200 dark:border-slate-700
        ">
          <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-1">
              Safety Record
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              342 consecutive days without incidents
            </p>
          </div>
        </div>

        {/* PPE Compliance */}
        <div className="
          flex items-start gap-4 p-4 
          bg-white dark:bg-slate-800 
          rounded-xl 
          border border-slate-200 dark:border-slate-700
        ">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
            <HardHat className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-1">
              PPE Compliance
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              100% compliance rate maintained
            </p>
          </div>
        </div>

        {/* Active Protocols */}
        <div className="
          flex items-start gap-4 p-4 
          bg-white dark:bg-slate-800 
          rounded-xl 
          border border-slate-200 dark:border-slate-700
        ">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-1">
              Active Protocols
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Daily safety briefings & inspections
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="
          flex items-start gap-4 p-4 
          bg-white dark:bg-slate-800 
          rounded-xl 
          border border-slate-200 dark:border-slate-700
        ">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
            <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-1">
              Certifications
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              OSHA, ISO 45001, LEED AP certified
            </p>
          </div>
        </div>

      </div>
    </Card>
  );
}