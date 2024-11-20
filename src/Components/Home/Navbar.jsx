import { useContext } from 'react';
import { ThemeContext } from '../../App';

function Navbar() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="bg-zinc-900 text-white p-10 flex justify-around gap-16 items-center">
            <h1 className="text-4xl font-semibold font-roboto">Kaif's Store</h1>
            <ul className="flex gap-9 text-base cursor-pointer">
                <li>Home</li>
                <li>Products</li>
                <li>Quiz</li>
                <li>Contact</li>
                <li>Messages</li>
            </ul>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-60 p-3 rounded-3xl outline-none placeholder-orange-500 pr-10"
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