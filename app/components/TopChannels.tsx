'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Organic Search', value: 45, color: '#3B82F6' },
  { name: 'Paid Ads', value: 25, color: '#8B5CF6' },
  { name: 'Social Media', value: 18, color: '#10B981' },
  { name: 'Email', value: 12, color: '#F59E0B' },
];

export function TopChannels() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Traffic Channels</h3>
      <p className="text-sm text-gray-500 mb-6">Channel performance breakdown</p>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}