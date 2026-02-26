//import DashboardLayout from "../components/construction-attendance-dashboard/DashboardLayout";
import AttendancePanel from "../components/construction-attendance-dashboard/AttendancePanel";
import WorkerList from "../components/construction-attendance-dashboard/WorkerList";
import EntryExitLogsPanel from "../components/construction-attendance-dashboard/EntryExitLogsPanel";

export default function AttendanceDashboardPage() {
  return (
    //<DashboardLayout>
      <div className="space-y-6">
        <AttendancePanel />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WorkerList />
          <EntryExitLogsPanel />
        </div>
      </div>
    //</DashboardLayout>
  );
}