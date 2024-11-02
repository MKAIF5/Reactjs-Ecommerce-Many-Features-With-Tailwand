import { useContext } from 'react';
import { ThemeContext } from '../../App';

function Navbar() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`bg-zinc-900 p-10 flex justify-around gap-16 items-center ${theme === 'dark' ? 'bg-white text-black' : 'text-white'}`}>
            <h1 className={`text-4xl font-semibold font-roboto ${theme === 'dark' ? 'text-black' : 'text-white'}`}>Kaif's Store</h1>
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
                    className={`w-60 p-3 rounded-3xl outline-none placeholder-orange-500 pr-10 ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-white text-black'}`}
                />
                <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-orange-500' : 'text-black'}`}>
                    <i className="fas fa-search"></i>
                </span>
            </div>
            <div className="flex gap-10">
                <button className={`p-2 rounded-2xl w-20 ${theme === 'dark' ? 'bg-orange-500 text-black' : 'bg-orange-500 text-white'}`}>Sign up</button>
                <button className={`p-2 rounded-2xl w-20 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-zinc-700 text-white'}`}>Log In</button>
            </div>
        </div>
    );
}

export default Navbar;