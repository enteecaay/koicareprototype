import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const SaltCalculator: React.FC = () => {
  const [volume, setVolume] = useState<string>('');
  const [targetPPM, setTargetPPM] = useState<string>('3000');
  const [result, setResult] = useState<number | null>(null);

  const calculateSalt = () => {
    const volumeNum = parseFloat(volume);
    const ppmNum = parseFloat(targetPPM);
    
    if (volumeNum && ppmNum) {
      // Formula: (Volume in liters * Target PPM) / 1,000,000
      const saltKg = (volumeNum * ppmNum) / 1000000;
      setResult(saltKg);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Calculator className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">Salt Calculator</h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pond Volume (Liters)
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter pond volume"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Salt Concentration (PPM)
            </label>
            <select
              value={targetPPM}
              onChange={(e) => setTargetPPM(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="3000">3,000 PPM (Parasitic Treatment)</option>
              <option value="5000">5,000 PPM (Intensive Treatment)</option>
              <option value="1000">1,000 PPM (Maintenance)</option>
            </select>
          </div>

          <button
            onClick={calculateSalt}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Results</h3>
              <p className="text-blue-800">
                You need <span className="font-bold">{result.toFixed(2)} kg</span> of salt
              </p>
              <p className="text-sm text-blue-700 mt-2">
                Add salt gradually over 24 hours and ensure proper dissolution.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SaltCalculator;