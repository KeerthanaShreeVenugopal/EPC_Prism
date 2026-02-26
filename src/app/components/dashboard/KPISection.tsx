import GlassCard from "./GlassCard";

export default function KPISection({ kpis }: any) {
  return (
    <div className="grid grid-cols-3 gap-6 mb-10">
      {kpis.map((kpi: any, i: number) => (
        <GlassCard key={i} title={kpi.label} value={kpi.value} />
      ))}
    </div>
  );
}