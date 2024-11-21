import Navbar from "../Home/Navbar";

function Quiz() {
    return (
        <>
            <Navbar />

            <div className="flex justify-center my-4" >
                <div className="bg-zinc-900 w-4/5 min-h-80 p-5 
                rounded-lg">
                    <div>
                        <h1 className="text-5xl font-semibold text-white 
                        text-center">Quiz</h1>
                    </div>
                    <div className="my-10 text-xl text-center text-white font-medium
                ">
                        <h1>1 : What Is The Most Selling Brand In This Option</h1>
                    </div>

                    <div className="text-white">

                        <div className="border border-white p-3 my-5 cursor-pointer">
                            <h2>Makeup</h2>
                        </div>
                        
                        <div className="border border-white p-3 my-5 cursor-pointer">
                            <h2>Clothes</h2>
                        </div>
                        
                        <div className="border border-white p-3 my-5 cursor-pointer">
                            <h2>Foods</h2>
                        </div>
                        
                        <div className="border border-white p-3 my-5 cursor-pointer">
                            <h2>Medicine</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quiz
