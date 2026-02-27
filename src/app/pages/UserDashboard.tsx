import ConstructionHeader from "../components/construction-dashboard/ConstructionHeader";
import MetricsCards from "../components/construction-dashboard/MetricsCards";
import ProgressChart from "../components/construction-dashboard/ProgressChart";
import SafetyInfo from "../components/construction-dashboard/SafetyInfo";
import Timeline from "../components/construction-dashboard/Timeline";
import ProjectTeam from "../components/construction-dashboard/ProjectTeam";

export default function ConstructionDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
        
        <ConstructionHeader />
        <MetricsCards />
        <ProgressChart />
        <SafetyInfo />
        <Timeline />
        <ProjectTeam />

      </div>
    </div>
  );
}