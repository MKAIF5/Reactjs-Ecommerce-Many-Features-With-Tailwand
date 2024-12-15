import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "./data";
import Navbar from "../Home/Navbar";

function Quiz() {

    const theme = useSelector((state) => state.theme.theme);

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const optionArray = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                optionArray[question.ans - 1].current.classList.add("correct")
            }
        }
    };


    return (
        <>
            <Navbar />

            <div className="flex justify-center my-1">
                <div className="w-4/5 min-h-80 p-4 rounded-lg">
                    <div>
                        <h1 className={`text-5xl font-semibold text-center ${theme === "dark" ? "text-white" : "text-black"}`}>
                            Quiz
                        </h1>
                    </div>
                    <div className={`my-10 text-xl text-center font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        <h1>{index + 1} : {question.question}</h1>
                    </div>

                    <div className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                        {/* Option 1 */}
                        <div
                            className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                            onClick={(e) => checkAnswer(e, 1)}
                            ref={Option1}
                        >
                            <h2>{question.option1}</h2>
                        </div>

                        {/* Option 2 */}
                        <div
                            className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                            onClick={(e) => checkAnswer(e, 2)}
                            ref={Option2}
                        >
                            <h2>{question.option2}</h2>
                        </div>

                        {/* Option 3 */}
                        <div
                            className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                            onClick={(e) => checkAnswer(e, 3)}
                            ref={Option3}
                        >
                            <h2>{question.option3}</h2>
                        </div>

                        {/* Option 4 */}
                        <div
                            className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                            onClick={(e) => checkAnswer(e, 4)}
                            ref={Option4}
                        >
                            <h2>{question.option4}</h2>
                        </div>
                    </div>

                    <div className="flex justify-center mt-5">
                        <button className="bg-orange-500 hover:bg-orange-600 p-3 w-40 rounded font-semibold text-white">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;