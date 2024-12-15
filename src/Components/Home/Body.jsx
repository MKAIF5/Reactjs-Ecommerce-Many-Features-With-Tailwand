import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shirt from "./img/shirt.png";
import starwberry from "./img/strawberry.png";
import laptop from "./img/laptop.png";
import Micro from "./img/Micro.png";




function Body() {

    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`mx-auto my-28`}>
            <div className="text-center">
                <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-5xl font-extrabold`}>
                    Welcome to Kaif's Store
                </h1>
                <p className={`${theme === "dark" ? "text-white" : "text-black"} text-xl my-4`}>
                    Discover Amazing Products at Unbeatable Prices!
                </p>
                <Link to="/products" className="inline-block mt-5 p-3 bg-orange-500 text-white text-lg rounded-xl hover:bg-orange-600 transition duration-300">
                    Shop Now
                </Link>
            </div>

            <div className="mt-16">
                <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-3xl text-center font-semibold`}>
                    Special Offers
                </h2>
                <div className={`${theme === "dark" ? "text-white" : "text-black"} grid grid-cols-2 md:grid-cols-4 gap-5 mx-10 mt-8`}>
                    <div className="p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <img src={shirt} alt="Clothes" className="w-full h-60 object-cover rounded-lg" />
                        <h3 className="text-lg font-semibold mt-4">Man Plaid Shirt</h3>
                        <div className="flex gap-3">
                            <p className="text-lg text-red-500 mt-2 line-through">
                            34.99</p>
                            <p className="text-lg text-green-500 mt-2">$28.86</p>
                        </div>
                        <Link to="/product/85" className="mt-3 inline-block p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                            View Details
                        </Link>
                    </div>

                    <div className="p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <img src={starwberry} alt="Grocery" className="w-full h-60 object-cover rounded-lg" />
                        <h3 className="text-lg font-semibold mt-4">Strawerry</h3>
                        <div className="flex gap-3">
                            <p className="text-lg text-red-500 mt-2 line-through">
                            3.99</p>
                            <p className="text-lg text-green-500 mt-2">$3.21</p>
                        </div>
                        <Link to="/product/40" className="mt-3 inline-block p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                            View Details
                        </Link>
                    </div>

                    <div className="p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <img src={laptop} alt="Electronics" className="w-full h-60 object-cover rounded-lg" />
                        <h3 className="text-lg font-semibold mt-4">Apple MacBook Pro 14 Inch Space Grey</h3>
                        <div className="flex gap-3">
                            <p className="text-lg text-red-500 mt-2 line-through">
                            1999.99</p>
                            <p className="text-lg text-green-500 mt-2">$1814.99</p>
                        </div>
                        <Link to="/product/78" className="mt-3 inline-block p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                            View Details
                        </Link>
                    </div>

                    <div className="p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <img src={Micro} alt="Sports" className="w-full h-60 object-cover rounded-lg" />
                        <h3 className="text-lg font-semibold mt-4">Microwave Oven</h3>
                        <div className="flex gap-3">
                            <p className="text-lg text-red-500 mt-2 line-through">
                            89.99</p>
                            <p className="text-lg text-green-500 mt-2">$73.13</p>
                        </div>
                        <Link to="/product/66" className="mt-3 inline-block p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>

            {/* Add Product Button */}
            <div className="flex justify-center my-10">
                <Link to="/addProduct" className="p-2 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition duration-300">Add Your Products</Link>
            </div>
        </div>
    );
}

export default Body;