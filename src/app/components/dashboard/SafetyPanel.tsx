export default function SafetyPanel({ safety }: any) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h3 className="text-white mb-4">Safety & Quality</h3>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400">Incident Rate</p>
          <p className="text-red-400 text-xl font-bold">
            {safety.incidentRate}
          </p>
        </div>

        <div>
          <p className="text-gray-400">Inspection Pass Rate</p>
          <p className="text-green-400 text-xl font-bold">
            {safety.inspectionPassRate}%
          </p>
        </div>

        <div>
          <p className="text-gray-400">Rework Rate</p>
          <p className="text-yellow-400 text-xl font-bold">
            {safety.reworkRate}%
          </p>
        </div>
      </div>
    </div>
  );
}