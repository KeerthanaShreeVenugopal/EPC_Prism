import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export interface AttendanceRecord {
  id: string;
  workerId: string;
  workerName: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  status: 'present' | 'absent' | 'late' | 'on-time';
  hoursWorked?: number;
}

interface AttendancePanelProps {
  records: AttendanceRecord[];
}

export function AttendancePanel({ records }: AttendancePanelProps) {
  const getStatusIcon = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
      case 'on-time':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'late':
        return <Clock className="w-4 h-4" />;
      case 'absent':
        return <XCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
      case 'on-time':
        return 'bg-green-500 text-white';
      case 'late':
        return 'bg-yellow-500 text-white';
      case 'absent':
        return 'bg-red-500 text-white';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-5 gap-4 p-3 bg-slate-100 rounded-lg font-semibold text-sm text-gray-700">
            <div>Worker</div>
            <div>Check In</div>
            <div>Check Out</div>
            <div>Hours</div>
            <div>Status</div>
          </div>
          {records.map((record) => (
            <div
              key={record.id}
              className="grid grid-cols-5 gap-4 p-3 bg-white border border-slate-200 rounded-lg hover:border-orange-300 transition-colors"
            >
              <div className="font-medium text-gray-900">{record.workerName}</div>
              <div className="text-gray-600 text-sm">{record.checkIn}</div>
              <div className="text-gray-600 text-sm">{record.checkOut || '-'}</div>
              <div className="text-gray-600 text-sm">
                {record.hoursWorked ? `${record.hoursWorked}h` : '-'}
              </div>
              <div>
                <Badge className={`${getStatusColor(record.status)} border-0 flex items-center gap-1 w-fit`}>
                  {getStatusIcon(record.status)}
                  {record.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
