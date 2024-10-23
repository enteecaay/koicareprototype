// src/components/AddPondModal.tsx

import React, { useState } from 'react';

interface Pond {
    name: string;
    volume: number;
    location: string;
    lastMaintenance: string;
}

interface AddPondModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddPond: (pond: Pond) => void;
}

const AddPondModal: React.FC<AddPondModalProps> = ({ isOpen, onClose, onAddPond }) => {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState<number | ''>('');
    const [location, setLocation] = useState('');
    const [lastMaintenance, setLastMaintenance] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPond = { name, volume: Number(volume), location, lastMaintenance };
        onAddPond(newPond);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl mb-4">Add Pond</h2>
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
                        <label className="block mb-2">Volume (L)</label>
                        <input
                            type="number"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Last Maintenance</label>
                        <input
                            type="date"
                            value={lastMaintenance}
                            onChange={(e) => setLastMaintenance(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                        Add Pond
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddPondModal;

