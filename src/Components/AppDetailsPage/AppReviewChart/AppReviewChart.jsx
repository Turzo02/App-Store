import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const AppReviewChart = ({ ratings }) => {

  const reversedRatings = [...ratings].reverse();

  return (
    <div className="w-full h-64  p-4 rounded-2xl shadow-md">
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">Ratings</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          layout="vertical"
          data={reversedRatings}
          margin={{ top: 10, right: 0, left: 20, bottom: 10 }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            width={80}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              padding: '8px',
            }}
            cursor={{ fill: 'rgba(145, 85, 239, 0.1)' }}
          />
          <Bar
            dataKey="count"
            fill="#a78bfa" 
            radius={[6, 0, 0, 6]} 
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppReviewChart;
