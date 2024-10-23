import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import AddPondModal from '../components/AddPondModal';

interface Pond {
  id: string;
  name: string;
  volume: number;
  location: string;
  lastMaintenance: string;
}

const PondManager: React.FC = () => {
  const [ponds, setPonds] = useState<Pond[]>([
    {
      id: '1',
      name: 'Main Koi Pond',
      volume: 5000,
      location: 'Backyard',
      lastMaintenance: '2024-03-15',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPond = (pond: Pond) => {
    setPonds([...ponds, { ...pond, id: Date.now().toString() }]);
  };

  const handleDelete = (id: string) => {
    setPonds(ponds.filter((pond) => pond.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Pond Manager</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Pond
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ponds.map((pond) => (
          <div key={pond.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{pond.name}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    // Handle edit functionality here
                  }}
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(pond.id)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Volume: <span className="font-medium">{pond.volume} L</span>
              </p>
              <p className="text-sm text-gray-600">
                Location: <span className="font-medium">{pond.location}</span>
              </p>
              <p className="text-sm text-gray-600">
                Last Maintenance: <span className="font-medium">{new Date(pond.lastMaintenance).toLocaleDateString()}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <AddPondModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPond={handleAddPond}
      />
    </div>
  );
};

export default PondManager;
