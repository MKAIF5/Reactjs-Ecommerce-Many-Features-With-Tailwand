import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Home/Navbar";

function Quiz() {

    const theme = useSelector((state) => state.theme.theme);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (index) => {
        setSelectedOption(index);
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center my-5">
                <div className="w-4/5 min-h-80 p-4 rounded-lg">
                    <div>
                        <h1 className={`text-5xl font-semibold text-center ${theme === "dark" ? "text-white" : "text-black"}`}>Quiz</h1>
                    </div>
                    <div className={`my-10 text-xl text-center font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        <h1>1 : What Are The Most Selling Things In This Option</h1>
                    </div>

                    <div className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                        <div
                            onClick={() => handleClick(0)}
                            className={`p-3 my-5 cursor-pointer border ${selectedOption === 0 ? 'border-red-500' : ''} ${theme === "dark" ? "border-white" : "border-black"}`}
                        >
                            <h2>Makeup</h2>
                        </div>

                        <div
                            onClick={() => handleClick(1)}
                            className={`p-3 my-5 cursor-pointer border ${selectedOption === 1 ? 'border-green-500' : ''} ${theme === "dark" ? "border-white" : "border-black"}`}
                        >
                            <h2>Clothes</h2>
                        </div>

                        <div
                            onClick={() => handleClick(2)}
                            className={`p-3 my-5 cursor-pointer border ${selectedOption === 2 ? 'border-blue-500' : ''} ${theme === "dark" ? "border-white" : "border-black"}`}
                        >
                            <h2>Foods</h2>
                        </div>

                        <div
                            onClick={() => handleClick(3)}
                            className={`p-3 my-5 cursor-pointer border ${selectedOption === 3 ? 'border-yellow-500' : ''} ${theme === "dark" ? "border-white" : "border-black"}`}
                        >
                            <h2>Medicine</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Quiz;
