import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PondManager from './pages/PondManager';
import SaltCalculator from './pages/SaltCalculator';
import FoodCalculator from './pages/FoodCalculator';
import KoiList from './pages/KoiList';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import UserManagement from './pages/admin/UserManagement';
import ProductManagement from './pages/shop/ProductManagement';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-16">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/pond"
                  element={
                    <ProtectedRoute requiredRole="user">
                      <PondManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/koi-list"
                  element={
                    <ProtectedRoute requiredRole="user">
                      <KoiList />
                    </ProtectedRoute>
                  }
                />
                <Route path="/salt-calculator" element={<SaltCalculator />} />
                <Route path="/food-calculator" element={<FoodCalculator />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <UserManagement />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/shop/products"
                  element={
                    <ProtectedRoute requiredRole="shop">
                      <ProductManagement />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
