import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Package } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

const ProductManagement: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Premium Koi Food',
      description: 'High-quality floating pellets',
      price: 29.99,
      stock: 50,
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400',
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Package className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
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
              <div className="space-y-2">
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${product.price}</span>
                  <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;