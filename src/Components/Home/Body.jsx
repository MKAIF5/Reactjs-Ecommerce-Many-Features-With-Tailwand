import { Link } from "react-router-dom";

function Body() {

    return (
        <div className={`mx-auto my-32`}>
            <h1 className="text-center text-5xl font-extrabold">Welcome To Kaif's Store</h1>
            <br />
            <h1 className="text-center text-xl">Explore The Best Products At Unbeatable Prices</h1>
            <div className="flex justify-center my-10">
                <Link to="/addProduct" className="p-2 bg-orange-500 text-white rounded-xl font-medium">Add Your Products</Link>
            </div>
        </div>
    );
}

export default Body;