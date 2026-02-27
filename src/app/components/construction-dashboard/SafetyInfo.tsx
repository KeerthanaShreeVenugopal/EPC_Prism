import { Card } from "../ui/card";
import { ShieldCheck, HardHat, AlertTriangle, Award } from "lucide-react";

export default function SafetyInfo() {
  return (
    <Card className="p-6 border-slate-800 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-white">Safety & Compliance</h2>
        <p className="text-sm text-slate-400">
          Our commitment to site safety
        </p>
      </div>

      <div className="space-y-4">

        {/* Safety Record */}
        <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-2 bg-green-900/40 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-green-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-white mb-1">Safety Record</h3>
            <p className="text-sm text-slate-400">
              342 consecutive days without incidents
            </p>
          </div>
        </div>

        {/* PPE Compliance */}
        <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-2 bg-blue-900/40 rounded-lg">
            <HardHat className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-white mb-1">PPE Compliance</h3>
            <p className="text-sm text-slate-400">
              100% compliance rate maintained
            </p>
          </div>
        </div>

        {/* Active Protocols */}
        <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-2 bg-amber-900/40 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-white mb-1">Active Protocols</h3>
            <p className="text-sm text-slate-400">
              Daily safety briefings & inspections
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-2 bg-purple-900/40 rounded-lg">
            <Award className="w-5 h-5 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-white mb-1">Certifications</h3>
            <p className="text-sm text-slate-400">
              OSHA, ISO 45001, LEED AP certified
            </p>
          </div>
        </div>

      </div>
    </Card>
  );
}