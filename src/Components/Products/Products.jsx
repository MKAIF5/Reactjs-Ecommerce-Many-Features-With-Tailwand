import axios from "axios";
import Navbar from "../Home/Navbar";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Card from "./Card";
import loading from "./img/ZKZg.gif";


function Products() {

    const [product, setProduct] = useState(null);

    const API_KEY = "https://dummyjson.com/products";

    const getProductData = async () => {
        const response = await axios(API_KEY)
        // console.log(response);
        setProduct(response?.data?.products);
    }

    useEffect(() => {
        getProductData();
    }, []);

    const [search, setSearch] = useState("");

    const searchProducts = () => {

        const result = product?.filter((item) => {
            return item.title.toLowerCase().includes(search);
        })
        return result || []
    };

    const searching = searchProducts()

    return (
        <>

            <Navbar />

            <div className="flex justify-center my-10 items-center gap-3">
                <input
                    className="w-2/4 rouneded-xl p-2 outline-none"
                    placeholder="Enter Your Product"
                    onChange={(event) => {
                        setSearch(event.target.value?.toLowerCase());
                    }}
                    type="text"
                    name=""
                    id=""
                />
                <div className="w-10 h-10 rounded-full bg-white flex justify-center
                items-center"><CiSearch className="font-semibold text-2xl" />
                </div>
            </div>


            {
                product === null ?
                    <div className="flex justify-center">
                        <img src={loading} alt="" />
                    </div>
                    : null
            }

            <div>
                <div className="flex flex-wrap justify-center gap-7 my-10
                text-white text-wrap">

                    {searching.length === 0 ? "Product Not Found" : ""}


                    {
                        searching?.map((item) => {
                            return <Card key={item.id}
                                name={item.title}
                                image={item.thumbnail}
                                price={item.price}
                                discountPercentage={item.discountPercentage}
                                rating={item.rating}
                                stock={item.stock}
                            />;
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Products