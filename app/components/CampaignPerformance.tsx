'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Summer Sale', Clicks: 4000, Conversions: 2400 },
  { name: 'Product Launch', Clicks: 3000, Conversions: 1398 },
  { name: 'Newsletter', Clicks: 2000, Conversions: 980 },
  { name: 'Referral', Clicks: 2780, Conversions: 1908 },
  { name: 'Retargeting', Clicks: 1890, Conversions: 1200 },
];

export function CampaignPerformance() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Campaign Performance</h3>
          <p className="text-sm text-gray-500 mt-1">Click and conversion metrics by campaign</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="name" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px'
            }}
          />
          <Bar dataKey="Clicks" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Conversions" fill="#10B981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}