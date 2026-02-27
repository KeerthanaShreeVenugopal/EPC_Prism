import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  UserCheck, 
  UserX, 
  TrendingUp, 
  ScanLine,
  Building2,
  Calendar
} from 'lucide-react';

import { StatCard } from '../components/construction-attendance-dashboard/StatCard';
import { WorkerList, Worker } from '../components/construction-attendance-dashboard/WorkerList';
import { AttendancePanel, AttendanceRecord } from '../components/construction-attendance-dashboard/AttendancePanel';
import { EntryExitLogsPanel, EntryExitLog } from '../components/construction-attendance-dashboard/EntryExitLogsPanel';
import { ScannerModal } from '../components/construction-attendance-dashboard/ScannerModal';

import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';

import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';

// Mock initial data
const initialWorkers: Worker[] = [
  { id: 'W001', name: 'John Smith', role: 'Site Supervisor', status: 'on-site', entryTime: '07:45 AM', location: 'Floor 3' },
  { id: 'W002', name: 'Mike Johnson', role: 'Mason', status: 'on-site', entryTime: '08:00 AM', location: 'Floor 2' },
  { id: 'W003', name: 'David Brown', role: 'Electrician', status: 'on-site', entryTime: '08:15 AM', location: 'Floor 1' },
  { id: 'W004', name: 'Robert Davis', role: 'Plumber', status: 'on-site', entryTime: '08:20 AM', location: 'Basement' },
  { id: 'W005', name: 'James Wilson', role: 'Carpenter', status: 'on-site', entryTime: '07:50 AM', location: 'Floor 3' },
  { id: 'W006', name: 'William Moore', role: 'Painter', status: 'absent', location: '-' },
  { id: 'W007', name: 'Thomas Taylor', role: 'Mason', status: 'on-site', entryTime: '08:30 AM', location: 'Floor 2' },
  { id: 'W008', name: 'Charles Anderson', role: 'Helper', status: 'on-site', entryTime: '08:00 AM', location: 'Floor 1' },
];

const initialAttendance: AttendanceRecord[] = [
  { id: 'A001', workerId: 'W001', workerName: 'John Smith', date: '2026-02-26', checkIn: '07:45 AM', checkOut: '-', status: 'on-time' },
  { id: 'A002', workerId: 'W002', workerName: 'Mike Johnson', date: '2026-02-26', checkIn: '08:00 AM', checkOut: '-', status: 'on-time' },
  { id: 'A003', workerId: 'W003', workerName: 'David Brown', date: '2026-02-26', checkIn: '08:15 AM', checkOut: '-', status: 'on-time' },
  { id: 'A004', workerId: 'W004', workerName: 'Robert Davis', date: '2026-02-26', checkIn: '08:20 AM', checkOut: '-', status: 'late' },
  { id: 'A005', workerId: 'W005', workerName: 'James Wilson', date: '2026-02-26', checkIn: '07:50 AM', checkOut: '-', status: 'on-time' },
  { id: 'A006', workerId: 'W006', workerName: 'William Moore', date: '2026-02-26', checkIn: '-', checkOut: '-', status: 'absent' },
  { id: 'A007', workerId: 'W007', workerName: 'Thomas Taylor', date: '2026-02-26', checkIn: '08:30 AM', checkOut: '-', status: 'late' },
  { id: 'A008', workerId: 'W008', workerName: 'Charles Anderson', date: '2026-02-26', checkIn: '08:00 AM', checkOut: '-', status: 'on-time' },
];

const initialLogs: EntryExitLog[] = [
  { id: 'L001', workerId: 'W008', workerName: 'Charles Anderson', type: 'entry', time: '08:00 AM', date: '2026-02-26' },
  { id: 'L002', workerId: 'W007', workerName: 'Thomas Taylor', type: 'entry', time: '08:30 AM', date: '2026-02-26' },
  { id: 'L003', workerId: 'W004', workerName: 'Robert Davis', type: 'entry', time: '08:20 AM', date: '2026-02-26' },
  { id: 'L004', workerId: 'W003', workerName: 'David Brown', type: 'entry', time: '08:15 AM', date: '2026-02-26' },
  { id: 'L005', workerId: 'W002', workerName: 'Mike Johnson', type: 'entry', time: '08:00 AM', date: '2026-02-26' },
  { id: 'L006', workerId: 'W005', workerName: 'James Wilson', type: 'entry', time: '07:50 AM', date: '2026-02-26' },
  { id: 'L007', workerId: 'W001', workerName: 'John Smith', type: 'entry', time: '07:45 AM', date: '2026-02-26' },
];

const weeklyData = [
  { day: 'Mon', present: 45, absent: 5 },
  { day: 'Tue', present: 48, absent: 2 },
  { day: 'Wed', present: 47, absent: 3 },
  { day: 'Thu', present: 46, absent: 4 },
  { day: 'Fri', present: 44, absent: 6 },
  { day: 'Sat', present: 30, absent: 20 },
];

const hourlyEntryData = [
  { hour: '6 AM', count: 2 },
  { hour: '7 AM', count: 8 },
  { hour: '8 AM', count: 15 },
  { hour: '9 AM', count: 5 },
  { hour: '10 AM', count: 2 },
];

export default function AttendanceDashboardPage() {
  const [workers, setWorkers] = useState<Worker[]>(initialWorkers);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>(initialAttendance);
  const [logs, setLogs] = useState<EntryExitLog[]>(initialLogs);
  const [scannerOpen, setScannerOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleScan = (workerId: string, type: 'entry' | 'exit') => {
    const worker = workers.find(w => w.id === workerId);
    
    if (!worker) {
      toast.error('Worker not found', {
        description: `No worker found with ID: ${workerId}`,
      });
      return;
    }

    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Add to logs
    const newLog: EntryExitLog = {
      id: `L${Date.now()}`,
      workerId: worker.id,
      workerName: worker.name,
      type,
      time: timeString,
      date: now.toISOString().split('T')[0],
    };
    setLogs([newLog, ...logs]);

    // Update worker status
    if (type === 'entry') {
      setWorkers(workers.map(w => 
        w.id === workerId 
          ? { ...w, status: 'on-site', entryTime: timeString }
          : w
      ));

      // Update attendance
      setAttendance(attendance.map(a =>
        a.workerId === workerId
          ? { ...a, checkIn: timeString, status: 'present' }
          : a
      ));

      toast.success('Entry Recorded', {
        description: `${worker.name} checked in at ${timeString}`,
      });
    } else {
      setWorkers(workers.map(w =>
        w.id === workerId
          ? { ...w, status: 'present', exitTime: timeString }
          : w
      ));

      // Update attendance with exit time
      setAttendance(attendance.map(a =>
        a.workerId === workerId
          ? { ...a, checkOut: timeString }
          : a
      ));

      toast.success('Exit Recorded', {
        description: `${worker.name} checked out at ${timeString}`,
      });
    }

    setScannerOpen(false);
  };

  const totalWorkers = workers.length;
  const presentWorkers = workers.filter(w => w.status === 'on-site' || w.status === 'present').length;
  const absentWorkers = workers.filter(w => w.status === 'absent').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Toaster />
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Construction Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Site Management & Worker Tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <Button 
                onClick={() => setScannerOpen(true)}
                className="bg-orange-500 hover:bg-orange-600"
              >
                <ScanLine className="w-4 h-4 mr-2" />
                Scan ID Card
              </Button>
              <button
              onClick={handleLogout}
              className="px-6 py-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Workers"
            value={totalWorkers}
            icon={Users}
            trend="8% from last month"
            trendUp={true}
            color="blue"
          />
          <StatCard
            title="Present Today"
            value={presentWorkers}
            icon={UserCheck}
            trend="12% increase"
            trendUp={true}
            color="green"
          />
          <StatCard
            title="Absent Today"
            value={absentWorkers}
            icon={UserX}
            trend="3% decrease"
            trendUp={true}
            color="red"
          />
          <StatCard
            title="Attendance Rate"
            value={`${Math.round((presentWorkers / totalWorkers) * 100)}%`}
            icon={TrendingUp}
            trend="5% improvement"
            trendUp={true}
            color="orange"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="present" fill="#10b981" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="absent" fill="#ef4444" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Entry Times Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={hourlyEntryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hour" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#f97316" strokeWidth={3} dot={{ fill: '#f97316', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Table */}
        <div className="mb-8">
          <AttendancePanel records={attendance} />
        </div>

        {/* Worker List and Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WorkerList workers={workers} />
          </div>
          <div>
            <EntryExitLogsPanel logs={logs} />
          </div>
        </div>
      </div>

      {/* Scanner Modal */}
      <ScannerModal
        open={scannerOpen}
        onClose={() => setScannerOpen(false)}
        onScan={handleScan}
      />
    </div>
  );
}
