import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="bg-zinc-900 text-white p-10 flex justify-around gap-16 items-center">
            <h1 className="text-4xl font-semibold">Kaif's Store</h1>
                <Link>
            <ul className="flex gap-9 text-base cursor-pointer">
                <Link><li>Home</li></Link>
                <Link to={"/products"}><li>Products</li></Link>
                <Link to={"/quiz"}><li>Quiz</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
                <Link to={"/Messages"}><li>Messages</li></Link>
            </ul>
                </Link>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-60 p-3 rounded-3xl outline-none
                    text-black placeholder-orange-500 pr-10"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-search text-black"></i>
                </span>
            </div>
            <div className="flex gap-10">
                <button className="p-2 rounded-2xl w-20 bg-orange-500">Sign up</button>
                <button className="p-2 rounded-2xl w-20 bg-orange-500">Log In</button>
            </div>
        </div>
    );
}

export default Navbar;