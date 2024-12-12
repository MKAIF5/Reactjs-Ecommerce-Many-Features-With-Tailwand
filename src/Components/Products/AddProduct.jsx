import React, { useState } from 'react';
import Navbar from '../Home/Navbar';

function AddProduct() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPhoto, setProductPhoto] = useState(null);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            productName,
            productDescription,
            productPhoto,
            category,
            price,
            quantity,
        });
    };

    const handlePhotoChange = (e) => {
        setProductPhoto(e.target.files[0]);
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Add New Product</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="productName" className="block text-sm font-medium text-gray-600">Product Name</label>
                            <input
                                type="text"
                                id="productName"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-600">Product Description</label>
                            <textarea
                                id="productDescription"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product description"
                                rows="4"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="productPhoto" className="block text-sm font-medium text-gray-600">Product Photo</label>
                            <input
                                type="file"
                                id="productPhoto"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
                            <input
                                type="text"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product category"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price</label>
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product price"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product quantity"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddProduct;