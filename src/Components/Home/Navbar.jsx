import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    // State to toggle the mobile menu (hamburger menu)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility on mobile/tablet
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-zinc-900 text-white p-6 md:p-10 flex justify-between items-center
    h-32">
            {/* Store name */}
            <h1 className="text-4xl font-semibold flex gap-2">
                Kaif's <span>Store</span>
            </h1>

            <div className="lg:hidden" onClick={toggleMenu}>
                <i className="fas fa-bars text-white text-3xl cursor-pointer"></i>
            </div>

            <div className={`lg:flex gap-9 text-base cursor-pointer items-center ${isMenuOpen ? "block" : "hidden"
                } lg:block`}>

                <ul
                className="flex gap-12 mr-8"
                >
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/products">
                        <li>Products</li>
                    </Link>
                    <Link to="/quiz">
                        <li>Quiz</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/Messages">
                        <li>Messages</li>
                    </Link>
                </ul>


                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-60 p-3 rounded-3xl outline-none text-black placeholder-orange-500 pr-10"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <i className="fas fa-search text-black"></i>
                    </span>
                </div>

                {/* Sign Up and Log In Buttons */}
                <div className="flex gap-10">
                    <button className="p-2 rounded-2xl w-20 bg-orange-500">Sign up</button>
                    <button className="p-2 rounded-2xl w-20 bg-orange-500">Log In</button>
                </div>

            </div>
            {/* Search Input */}

        </div>
    );
}

export default Navbar;
