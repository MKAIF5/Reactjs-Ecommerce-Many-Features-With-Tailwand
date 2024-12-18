import Navbar from "../Home/Navbar";
import useSWR from "swr";
import axios from "axios";
import loading from "./img/ZKZg.gif";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'


export default function ProductDetail() {

    const theme = useSelector((state) => state.theme.theme);

    const params = useParams();

    const { data, error, isLoading } = useSWR(
        `https://dummyjson.com/products/${params.id}`,
        axios
    );
    const product = data?.data;

    const [selectedImage, setSelectedImage] = useState(null);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(product?.minimumOrderQuantity);
    }, [data]);

    if (isLoading) return <div className="flex justify-center"><img src={loading} alt="Loading..." /></div>;

    function alertClick() {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Purchase",
            showConfirmButton: false,
            timer: 1000
        });
    }

    return (
        <>
            <Navbar />
            <main className={`container mx-auto p-5 w-full my-10 min-h-screen ${theme === "dark" ? "bg-zinc-900" : "bg-white"}`}>
                <div className="product flex flex-col md:flex-row gap-5">
                    <div className="images flex flex-col md:w-2/5 gap-6">
                        {product?.images?.length > 1 && (
                            <div className="flex justify-center gap-10">
                                {product?.images.map((image, i) => (
                                    <img
                                        key={i}
                                        src={image}
                                        alt={`Thumbnail ${i}`}
                                        className ="animation p-3 w-24 h-24 object-cover cursor-pointer border rounded-md transition-all hover:border-blue-500"
                                        onMouseOver={() => setSelectedImage(image)}
                                    />
                                ))}
                            </div>
                        )}

                        <div className="w-full">
                            <img
                                className="animation w-full h-auto object-contain border rounded-md"
                                src={selectedImage || product?.images[0]}
                                alt="Main Product"
                            />
                        </div>
                    </div>

                    <div className="product-data md:w-3/5 flex flex-col gap-6">
                        <h2 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{product?.title}</h2>
                        <p className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>${product?.price * quantity || 0}</p>

                        <div className="flex items-center gap-3">
                            <span className="text-sm text-yellow-500">
                                {"⭐".repeat(Math.floor(product?.rating || 0))}
                            </span>
                            <span className="text-sm text-gray-600">({product?.rating || 0} / 5)</span>
                            <span className="text-sm text-green-500">{product?.discountPercentage}% OFF</span>
                        </div>

                        <div className="quantity-control flex items-center gap-6">
                            <label className={`text-lg font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Quantity :</label>
                            <div className="flex items-center gap-4">
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2"
                                    onClick={() => {
                                        setQuantity(quantity + 1)
                                    }
                                    }
                                >
                                    +
                                </button>
                                <span className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>{quantity}</span>
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2"
                                    onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(quantity - 1);
                                        }
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <p className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"}`}>{product?.description}</p>

                        <div className="mt-auto flex justify-center">
                            <button onClick={alertClick} className="bg-orange-500 animation text-white py-2 px-5 rounded-md">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="reviews mt-10">
                    <h3 className={`text-xl font-semibold mb-5 ${theme === "dark" ? "text-white" : "text-black"}`}>Customer Reviews</h3>
                    {product?.reviews?.map((review, i) => (
                        <div key={i} className={`review rounded-lg p-5 mb-4 shadow-md 
                        ${theme === "dark" ? "bg-zinc-800" : "bg-slate-100"}`}>
                            <div className="flex items-center justify-between mb-3">
                                <h5 className={` ${theme === "dark" ? "text-white" : "text-black"} text-lg font-semibold`}>{review.reviewerName}</h5>
                                <span className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
                                    {formatDistanceToNow(new Date(review.date), { addSuffix: true })}
                                </span>
                            </div>
                            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}