import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  status?: 'normal' | 'warning' | 'critical';
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, unit, icon, status = 'normal' }) => {
  const statusColors = {
    normal: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    critical: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        <div className={`p-2 rounded-lg ${statusColors[status]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {unit && <span className="ml-1 text-gray-500">{unit}</span>}
      </div>
    </div>
  );
};

export default DashboardCard;