import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "./data";
import Navbar from "../Home/Navbar";

function Quiz() {

    const theme = useSelector((state) => state.theme.theme);

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);

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
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                optionArray[question.ans - 1].current.classList.add("correct")
            }
        }
    };

    let nextPage = () => {

        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            optionArray.map((opt) => {
                opt.current.classList.remove("correct");
                opt.current.classList.remove("wrong");
                return null;
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

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
                    {result ? <></> : <>
                        <div className={`my-10 text-xl text-center font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <h1>{index + 1} : {question.question}</h1>
                        </div>

                        <div className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                            {/* Option 1 */}
                            <div
                                onClick={(e) => checkAnswer(e, 1)}
                                ref={Option1}
                                className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                            >
                                <span>{question.option1}</span>

                            </div>

                            {/* Option 2 */}
                            <div
                                className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                                onClick={(e) => checkAnswer(e, 2)}
                                ref={Option2}
                            >
                                <span>{question.option2}</span>
                            </div>

                            {/* Option 3 */}
                            <div
                                className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                                onClick={(e) => checkAnswer(e, 3)}
                                ref={Option3}
                            >
                                <span>{question.option3}</span>
                            </div>

                            {/* Option 4 */}
                            <div
                                className={`animation p-3 my-5 cursor-pointer border ${theme === "dark" ? "border-white" : "border-black"}`}
                                onClick={(e) => checkAnswer(e, 4)}
                                ref={Option4}
                            >
                                <span>{question.option4}</span>
                            </div>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button
                                onClick={nextPage}
                                className="bg-orange-500 hover:bg-orange-600 p-3 w-40 rounded font-semibold text-white">
                                Next
                            </button>
                        </div>
                    </>
                    }
                    <div className="text-white my-20 text-center">
                        <h1 className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"}`}>Your Score is {score} Out Of {data.length}</h1>
                        <button className="bg-orange-500 p-3 my-10 w-40 rounded-lg"
                            onClick={reset}
                        >Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;