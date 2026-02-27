import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Clock, MapPin } from 'lucide-react';

export interface Worker {
  id: string;
  name: string;
  role: string;
  status: 'present' | 'absent' | 'on-site';
  entryTime?: string;
  exitTime?: string;
  location?: string;
}

interface WorkerListProps {
  workers: Worker[];
}

export function WorkerList({ workers }: WorkerListProps) {
  const getStatusColor = (status: Worker['status']) => {
    switch (status) {
      case 'present':
        return 'bg-green-500';
      case 'on-site':
        return 'bg-blue-500';
      case 'absent':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: Worker['status']) => {
    switch (status) {
      case 'present':
        return 'Present';
      case 'on-site':
        return 'On Site';
      case 'absent':
        return 'Absent';
      default:
        return 'Unknown';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Worker List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {workers.map((worker) => (
            <div
              key={worker.id}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-orange-100 text-orange-700 font-semibold">
                    {worker.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{worker.name}</p>
                  <p className="text-sm text-gray-600">{worker.role}</p>
                  <div className="flex items-center gap-3 mt-1">
                    {worker.entryTime && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        In: {worker.entryTime}
                      </span>
                    )}
                    {worker.exitTime && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Out: {worker.exitTime}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className={`${getStatusColor(worker.status)} text-white border-0`}>
                  {getStatusText(worker.status)}
                </Badge>
                {worker.location && (
                  <p className="text-xs text-gray-500 mt-2 flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3" />
                    {worker.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
