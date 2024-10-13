function Navbar() {

    return (
        <>
            <div className="bg-zinc-900 p-10 flex justify-around gap-10 items-center">

                <div>
                    <h1 className="text-white text-4xl font-semibold
                    font-roboto">Kaif's Store</h1>
                </div>

                <div>
                    <ul className="flex gap-9 text-base text-white cursor-pointer">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Quiz</li>
                        <li>Contact</li>
                        <li>Add Your Products</li>
                        <li>Messages</li>
                    </ul>
                </div>
                <div>
                    <input type="text" name="" id="" 
                    placeholder="Search"
                    className="w-52 bg-zinc-800 text-white p-3 rounded-3xl
                    outline-none placeholder-orange-500"
                    />
                </div>
                <div className="text-white">
                    <h1>Sign up</h1>
                </div>
                <div className="text-white">
                <button className="fixed-button">Click Me!</button>
                </div>
            </div>
        </>
    )
}

export default Navbar