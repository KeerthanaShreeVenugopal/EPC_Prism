import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  color: 'orange' | 'blue' | 'green' | 'red';
}

export function StatCard({ title, value, icon: Icon, trend, trendUp, color }: StatCardProps) {
  const colorClasses = {
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
  };

  const bgColorClasses = {
    orange: 'bg-orange-50',
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    red: 'bg-red-50',
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <p className={`text-sm mt-2 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                {trendUp ? '↑' : '↓'} {trend}
              </p>
            )}
          </div>
          <div className={`${bgColorClasses[color]} p-4 rounded-xl`}>
            <Icon className={`w-8 h-8 ${colorClasses[color]} text-white`} strokeWidth={2} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
