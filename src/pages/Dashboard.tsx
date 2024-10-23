import React from 'react';
import { Droplets, Thermometer, BeakerIcon, Fish, Activity } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import FeedingSchedule from '../components/FeedingSchedule';

const Dashboard: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Water Temperature"
          value={23.5}
          unit="°C"
          icon={<Thermometer className="w-5 h-5" />}
          status="normal"
        />
        <DashboardCard
          title="pH Level"
          value={7.2}
          icon={<BeakerIcon className="w-5 h-5" />}
          status="warning"
        />
        <DashboardCard
          title="Dissolved Oxygen"
          value={8.5}
          unit="mg/L"
          icon={<Droplets className="w-5 h-5" />}
          status="normal"
        />
        <DashboardCard
          title="Ammonia Levels"
          value={0.25}
          unit="ppm"
          icon={<Activity className="w-5 h-5" />}
          status="critical"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Pond Overview</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580397581145-cdb6a35b7d3f?auto=format&fit=crop&q=80"
              alt="Koi pond"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Total Koi</p>
              <p className="text-xl font-semibold">12</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Water Volume</p>
              <p className="text-xl font-semibold">5,000 L</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <FeedingSchedule />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;