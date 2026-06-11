import { Users, TrendingUp, Target, Award } from 'lucide-react';

const activities = [
  {
    icon: Users,
    title: 'New user acquisition',
    description: '543 new users joined in the last 24 hours',
    time: '2 hours ago',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Revenue milestone',
    description: 'Monthly revenue exceeded $50k',
    time: '5 hours ago',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Target,
    title: 'Campaign completed',
    description: 'Summer Sale campaign ended with 284% ROI',
    time: '1 day ago',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Award,
    title: 'Top performer',
    description: 'Email marketing campaign achieved 45% open rate',
    time: '2 days ago',
    color: 'bg-orange-100 text-orange-600'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <div className={`${activity.color} p-2 rounded-lg`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
            </div>
            <span className="text-xs text-gray-400">{activity.time}</span>
            <div className="text-center text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
</div>
          </div>
        ))}
      </div>
    </div>
  );
}