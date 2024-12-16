import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import Navbar from '../Home/Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';


function AddProduct() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(errors);

    const theme = useSelector((state) => state.theme.theme)

    const formSubmitHandler = async (formValues) => {
        try {
            // console.log(formValues);

            const response = await axios.post(
                "https://dummyjson.com/products/add",
                formValues
            );
            // console.log("response ", response);
            toast.success("Sent Your Message Successfully");
        } catch (error) {
            console.log("error ", error);
        }
    };

    return (
        <>
            <Navbar />
            <div className={`${theme === "dark" ? "bg-zinc-900" : "bg-gray-100"} min-h-screen flex items-center justify-center py-8`}>
                <div className={`${theme === "dark" ? "bg-gray-700" : "bg-white"} p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl`}>
                    <h2 className={`text-3xl font-semibold text-center mb-6 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>Add New Product</h2>
                    <form onSubmit={handleSubmit(formSubmitHandler)} className="space-y-6">
                        <div>
                            <label htmlFor="productName" className={`block text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-600"}`}>Product Name</label>
                            <input
                                {...register("product-name", { required: true })}
                                type='text'
                                id="productName"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product name"
                            />
                            {errors['product-name'] && (
                                <span className='text-xs text-red-500'>This Input Is Required</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="productDescription" className={`block text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-600"}`}>Product Description</label>
                            <textarea
                                {...register("product-description", { required: true })}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product description"
                                rows="4"
                            />
                            {errors['product-description'] && (
                                <span className='text-xs text-red-500'>This Input Is Required</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="productPhoto" className={`block text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-600"}`}>Product Photo</label>
                            <input
                                {...register("product-photo", { required: true })}
                                type="file"
                                accept="image/*"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            {errors['product-photo'] && (
                                <span className='text-xs text-red-500'>This Input Is Required</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="category" className={`block text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-600"}`}>Category</label>
                            <select
                                {...register("category", { required: true })}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value='Sports'>Clothes</option>
                                <option value='Grocery'>Grocery</option>
                                <option value='Electronics'>Electronics</option>
                                <option value='Sports'>Sports</option>
                            </select>
                            {errors['category'] && (
                                <span className='text-xs text-red-500'>This Input Is Required</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="price" className={`block text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-600"}`}>Price</label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                id="price"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product price"
                            />
                            {errors['price'] && (
                                <span className='text-xs text-red-500'>This Input Is Required</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="quantity" className={`block text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-600"}`}>Quantity</label>
                            <input
                                {...register("quantity", { required: true })}
                                type="number"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter product quantity"
                            />
                            {errors['quantity'] && (
                                <span className='text-xs text-red-500'>This Input Is Required</span>
                            )}
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