import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Koi Food',
      description: 'High-quality floating pellets with essential nutrients',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400',
      category: 'Food',
    },
    {
      id: '2',
      name: 'Water Test Kit',
      description: 'Complete kit for testing water parameters',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400',
      category: 'Equipment',
    },
  ];

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shop</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;