'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Week 1', Revenue: 4000, Engagement: 2400 },
  { name: 'Week 2', Revenue: 3000, Engagement: 1398 },
  { name: 'Week 3', Revenue: 5000, Engagement: 3800 },
  { name: 'Week 4', Revenue: 2780, Engagement: 3908 },
  { name: 'Week 5', Revenue: 6890, Engagement: 4800 },
  { name: 'Week 6', Revenue: 7390, Engagement: 5800 },
  { name: 'Week 7', Revenue: 8490, Engagement: 6800 },
];

export function RevenueChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
          <p className="text-sm text-gray-500 mt-1">Weekly revenue and engagement trends</p>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Revenue(NPR)</span>
          </div>
          <div className="flex items-center ml-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
            <span className="text-xs text-gray-600">Engagement</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="name" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '8px'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="Revenue" 
            stroke="#3B82F6" 
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
          />
          <Area 
            type="monotone" 
            dataKey="Engagement" 
            stroke="#8B5CF6" 
            fillOpacity={1} 
            fill="url(#colorEngagement)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}