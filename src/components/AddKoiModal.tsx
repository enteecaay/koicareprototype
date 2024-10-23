// src/components/AddKoiModal.tsx

import React, { useState } from 'react';

interface Koi {
    name: string;
    variety: string;
    length: number;
    age: number;
    image: string;
}

interface AddKoiModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddKoi: (koi: Koi) => void;
}

const AddKoiModal: React.FC<AddKoiModalProps> = ({ isOpen, onClose, onAddKoi }) => {
    const [name, setName] = useState('');
    const [variety, setVariety] = useState('');
    const [length, setLength] = useState<number | ''>(''); // Keep as number or empty string
    const [age, setAge] = useState<number | ''>(''); // Keep as number or empty string
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newKoi = { name, variety, length: Number(length), age: Number(age), image }; // Convert to number
        onAddKoi(newKoi);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl mb-4">Add Koi</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Variety</label>
                        <input
                            type="text"
                            value={variety}
                            onChange={(e) => setVariety(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Length (cm)</label>
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value === '' ? '' : Number(e.target.value))} // Convert to number
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Age (years)</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} // Convert to number
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                        Add Koi
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddKoiModal;
