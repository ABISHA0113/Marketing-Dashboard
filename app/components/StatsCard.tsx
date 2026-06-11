import { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
  trend: 'up' | 'down';
}

export function StatsCard({ title, value, change, icon: Icon, color, trend }: StatsCardProps) {
  return (
    // Card container - rounded corners, white background, shadow on hover
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          {/* Title of the stat (e.g., "Total Revenue") */}
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          {/* The actual number value */}
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        {/* Icon container with colored background */}
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      {/* Trend indicator - shows if going up or down */}
      <div className="flex items-center mt-4">
        {trend === 'up' ? (
          <TrendingUp className="w-4 h-4 text-emerald-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm font-medium ml-1 ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  );
}