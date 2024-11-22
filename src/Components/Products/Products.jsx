import axios from "axios";
import Navbar from "../Home/Navbar";
import { useEffect, useState } from "react";
import Card from "./Card";

function Products() {

    const [product, setProduct] = useState(null);

    const API_KEY = "https://dummyjson.com/products";


    const getProductData = async () => {
        const response = await axios(API_KEY)
        console.log(response);
        setProduct(response?.data?.products);
    }

    useEffect(() => {
        getProductData();
    }, []);



    return (
        <>
            <Navbar />

            <div>
                <div className="flex flex-wrap justify-center gap-7 my-10
                text-white text-wrap">
                    {
                        product?.map((item) => {
                            return <Card key={item.id}
                                name={item.title} image={item.thumbnail}
                                 price={item.price} stock={item.stock}
                                 discountPercentage={item.discountPercentage}
                            />;
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Products
