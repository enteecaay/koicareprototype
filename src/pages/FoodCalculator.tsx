import React, { useState } from 'react';
import { Calculator, Fish } from 'lucide-react';

interface FoodCalculation {
  dailyAmount: number;
  feedingsPerDay: number;
  amountPerFeeding: number;
}

const FoodCalculator: React.FC = () => {
  const [waterTemp, setWaterTemp] = useState<string>('');
  const [totalKoi, setTotalKoi] = useState<string>('');
  const [avgLength, setAvgLength] = useState<string>('');
  const [result, setResult] = useState<FoodCalculation | null>(null);

  const calculateFood = () => {
    const temp = parseFloat(waterTemp);
    const koi = parseInt(totalKoi);
    const length = parseFloat(avgLength);

    if (temp && koi && length) {
      // Base calculation: (total koi * avg length * temperature factor) / 100
      const tempFactor = temp < 15 ? 0.5 : temp < 23 ? 1 : 1.5;
      const dailyAmount = (koi * length * tempFactor) / 100;
      
      const feedingsPerDay = temp < 15 ? 2 : temp < 23 ? 3 : 4;
      const amountPerFeeding = dailyAmount / feedingsPerDay;

      setResult({
        dailyAmount,
        feedingsPerDay,
        amountPerFeeding
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Calculator className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">Food Calculator</h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Water Temperature (°C)
            </label>
            <input
              type="number"
              value={waterTemp}
              onChange={(e) => setWaterTemp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter water temperature"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Number of Koi
            </label>
            <input
              type="number"
              value={totalKoi}
              onChange={(e) => setTotalKoi(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter number of koi"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Koi Length (cm)
            </label>
            <input
              type="number"
              value={avgLength}
              onChange={(e) => setAvgLength(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter average length"
            />
          </div>

          <button
            onClick={calculateFood}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Feeding Schedule</h3>
              <div className="space-y-2">
                <p className="text-blue-800">
                  Daily Amount: <span className="font-bold">{result.dailyAmount.toFixed(1)} grams</span>
                </p>
                <p className="text-blue-800">
                  Feedings per Day: <span className="font-bold">{result.feedingsPerDay}</span>
                </p>
                <p className="text-blue-800">
                  Amount per Feeding: <span className="font-bold">{result.amountPerFeeding.toFixed(1)} grams</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCalculator;