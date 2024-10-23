import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Fish, Droplets, Calculator, List, ShoppingBag, ShoppingCart, Shield, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const { user, isAdmin, isShopManager } = useAuth();

  const navItems = [
    { path: '/', icon: <Fish className="w-5 h-5" />, label: 'Dashboard' },
    { path: '/pond', icon: <Droplets className="w-5 h-5" />, label: 'Pond' },
    { path: '/salt-calculator', icon: <Calculator className="w-5 h-5" />, label: 'Salt Calc' },
    { path: '/food-calculator', icon: <Calculator className="w-5 h-5" />, label: 'Food Calc' },
    { path: '/koi-list', icon: <List className="w-5 h-5" />, label: 'Koi List' },
    { path: '/shop', icon: <ShoppingBag className="w-5 h-5" />, label: 'Shop' },
  ];

  if (isAdmin) {
    navItems.push({
      path: '/admin/users',
      icon: <Shield className="w-5 h-5" />,
      label: 'Users',
    });
  }

  if (isShopManager) {
    navItems.push({
      path: '/shop/products',
      icon: <Package className="w-5 h-5" />,
      label: 'Products',
    });
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Fish className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Koi Care</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user ? (
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;