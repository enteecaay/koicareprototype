import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Camera } from 'lucide-react';
import AddKoiModal from '../components/AddKoiModal';

interface Koi {
  id: string;
  name: string;
  variety: string;
  length: number;
  age: number;
  image: string;
}

const KoiList: React.FC = () => {
  const [kois, setKois] = useState<Koi[]>([
    {
      id: '1',
      name: 'Kohaku Beauty',
      variety: 'Kohaku',
      length: 45,
      age: 3,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddKoi = (koi: Koi) => {
    setKois([...kois, { ...koi, id: Date.now().toString() }]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Koi Collection</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Koi
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {kois.map((koi) => (
          <div key={koi.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={koi.image}
                alt={koi.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <Camera className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{koi.name}</h3>
                  <p className="text-sm text-gray-500">{koi.variety}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Length</p>
                  <p className="font-medium">{koi.length} cm</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  <p className="font-medium">{koi.age} years</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddKoiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddKoi={handleAddKoi}
      />
    </div>
  );
};

export default KoiList;
