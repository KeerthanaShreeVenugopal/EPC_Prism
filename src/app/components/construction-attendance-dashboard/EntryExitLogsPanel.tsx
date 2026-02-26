import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

export interface EntryExitLog {
  id: string;
  workerId: string;
  workerName: string;
  type: 'entry' | 'exit';
  time: string;
  date: string;
}

interface EntryExitLogsPanelProps {
  logs: EntryExitLog[];
}

export default function EntryExitLogsPanel({ logs }: EntryExitLogsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entry/Exit Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                {log.type === 'entry' ? (
                  <ArrowDownCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowUpCircle className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <p className="font-medium text-gray-900">{log.workerName}</p>
                  <p className="text-xs text-gray-500">ID: {log.workerId}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className={log.type === 'entry' ? 'bg-green-500 text-white border-0' : 'bg-red-500 text-white border-0'}>
                  {log.type === 'entry' ? 'Entry' : 'Exit'}
                </Badge>
                <p className="text-xs text-gray-500 mt-1">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
