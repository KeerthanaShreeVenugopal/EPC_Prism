import { Card } from "../ui/card";
import { ShieldCheck, HardHat, AlertTriangle, Award } from "lucide-react";

export default function SafetyInfo() {
  return (
    <Card className="p-6 border-slate-200 rounded-2xl bg-gradient-to-br from-slate-50 to-white">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-slate-900">Safety & Compliance</h2>
        <p className="text-sm text-slate-500">Our commitment to site safety</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-green-200">
          <div className="p-2 bg-green-100 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-slate-900 mb-1">Safety Record</h3>
            <p className="text-sm text-slate-600">342 consecutive days without incidents</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-blue-200">
          <div className="p-2 bg-blue-100 rounded-lg">
            <HardHat className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-slate-900 mb-1">PPE Compliance</h3>
            <p className="text-sm text-slate-600">100% compliance rate maintained</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-amber-200">
          <div className="p-2 bg-amber-100 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-slate-900 mb-1">Active Protocols</h3>
            <p className="text-sm text-slate-600">Daily safety briefings & inspections</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-purple-200">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Award className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-slate-900 mb-1">Certifications</h3>
            <p className="text-sm text-slate-600">OSHA, ISO 45001, LEED AP certified</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
