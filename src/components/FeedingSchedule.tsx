import React from 'react';
import { Clock, Check } from 'lucide-react';

const FeedingSchedule: React.FC = () => {
  const schedule = [
    { time: '08:00', status: 'completed', type: 'Morning Feed' },
    { time: '13:00', status: 'completed', type: 'Afternoon Feed' },
    { time: '18:00', status: 'pending', type: 'Evening Feed' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Feeding Schedule</h3>
      <div className="space-y-4">
        {schedule.map((feed, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-blue-500" />
              <div>
                <p className="font-medium">{feed.type}</p>
                <p className="text-sm text-gray-500">{feed.time}</p>
              </div>
            </div>
            {feed.status === 'completed' && (
              <Check className="w-5 h-5 text-green-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedingSchedule;