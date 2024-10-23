import React from 'react';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <MinusCircle className="w-5 h-5" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <PlusCircle className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;