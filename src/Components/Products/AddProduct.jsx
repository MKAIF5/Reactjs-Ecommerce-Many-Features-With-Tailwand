import Navbar from '../Home/Navbar';

function AddProduct() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData(e.target)
            // console.log(formData.entries());

            for (const pair of formData.entries()) {
                console.log(pair[0] + "," + pair[1]);
            }


            return;
            // const response = await axios.post(
            //   "https://dummyjson.com/products/add",
            // );      
            // console.log("response ", response);
        } catch (error) {
            console.log("error ", error);

        }

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
                                name='product-name'
                                type="text"
                                id="productName"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-600">Product Description</label>
                            <textarea
                                name='product-description'
                                id="productDescription"
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
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            // required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
                            <input
                                name='category'
                                type="text"
                                id="category"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product category"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price</label>
                            <input
                                name='price'
                                type="number"
                                id="price"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product price"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">Quantity</label>
                            <input
                                name='quantity'
                                type="number"
                                id="quantity"
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