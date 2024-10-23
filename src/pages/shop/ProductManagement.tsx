import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import AddProductModal from '../../components/AddProductModal';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const ProductManagement: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        {
            id: '1',
            name: 'Premium Koi Food',
            description: 'High-quality floating pellets with essential nutrients',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400',
            category: 'Food',
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddProduct = (product: Product) => {
        setProducts([...products, { ...product, id: Date.now().toString() }]);
    };

    const handleDelete = (id: string) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Product
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
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
                                    onClick={() => handleDelete(product.id)}
                                    className="p-2 text-gray-600 hover:text-red-600"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="text-xl font-bold">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <AddProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddProduct={handleAddProduct}
            />
        </div>
    );
};

export default ProductManagement;
