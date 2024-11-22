import { useState } from "react";
import Navbar from "../Home/Navbar";

function Quiz() {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center my-5" >
                <div className="bg-zinc-900 w-4/5 min-h-80 p-4 
                rounded-lg">
                    <div>
                        <h1 className="text-5xl font-semibold text-white 
                        text-center">Quiz</h1>
                    </div>
                    <div className="my-10 text-xl text-center text-white font-medium
                ">
                        <h1>1 : What Are The Most Selling Things In This Option</h1>
                    </div>

                    <div className="text-white">

                        <div
                            onClick={handleClick}
                            className={`p-3 my-5 cursor-pointer border ${isClicked ? 'border-red-500' : 'border-white'}`}
                        >
                            <h2>Makeup</h2>
                        </div>

                        <div
                            onClick={handleClick}
                            className={`p-3 my-5 cursor-pointer border ${isClicked ? 'border-green-500' : 'border-white'}`}>
                            <h2>Clothes</h2>
                        </div>

                        <div
                            onClick={handleClick}
                            className={`p-3 my-5 cursor-pointer border ${isClicked ? 'border-red-500' : 'border-white'}`}>
                            <h2>Foods</h2>
                        </div>

                        <div
                            onClick={handleClick}
                            className={`p-3 my-5 cursor-pointer border ${isClicked ? 'border-red-500' : 'border-white'}`}>
                            <h2>Medicine</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quiz