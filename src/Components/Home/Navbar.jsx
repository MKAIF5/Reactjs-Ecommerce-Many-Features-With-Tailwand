import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../feauters/theme";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkLight = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className={`bg-zinc-900 text-white p-6 md:p-10 flex justify-between items-center h-32 ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}>
            <h1 className={`text-4xl font-semibold flex gap-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Kaif's <span>Store</span>
            </h1>

            <div className="lg:hidden" onClick={toggleMenu}>
                <i className="fas fa-bars text-white text-3xl cursor-pointer"></i>
            </div>

            <div className={`lg:flex gap-9 text-base cursor-pointer items-center ${isMenuOpen ? "block" : "hidden"} lg:block`}>
                <ul className={`flex gap-12 text-sm ${theme === "dark" ? "text-white": "text-black"}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
                    >
                        <li>Home</li>
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
                    >
                        <li>Products</li>
                    </NavLink>
                    <NavLink
                        to="/quiz"
                        className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
                    >
                        <li>Quiz</li>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
                    >
                        <li>Contact</li>
                    </NavLink>
                    <NavLink
                        to="/messages"
                        className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
                    >
                        <li>Messages</li>
                    </NavLink>
                </ul>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className={`w-60 p-3 rounded-3xl outline-none text-black placeholder-orange-500 pr-10
                     ${theme === 'dark' ? 'bg-white' : 'bg-gray-200'}`}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <i className="fas fa-search text-black"></i>
                    </span>
                </div>

                <button
                    className="text-white text-3xl"
                    onClick={toggleDarkLight}
                >
                    {
                        theme === 'dark' ?
                            <IoSunnyOutline/> : <MdOutlineDarkMode className="text-black" />
                    }
                </button>

                <div className="flex gap-10 text-sm">
                    <Link to={"/signUp"}>
                        <button className="p-2 rounded-2xl w-20 bg-orange-500">Sign up</button>
                    </Link>
                    <Link to={"/login"}>
                        <button className="p-2 rounded-2xl w-20 bg-orange-500">Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;