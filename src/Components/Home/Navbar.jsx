function Navbar() {

    return (
        <>
            <div className="bg-zinc-900 p-10 flex justify-around gap-16 items-center">
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
                        <li>Messages</li>
                    </ul>
                </div>
                <div className="relative">
                    <input type="text" name="" id=""
                        placeholder="Search"
                        class="w-60 bg-zinc-800 text-white p-3 rounded-3xl
                  outline-none placeholder-orange-500 pr-10" />
                    <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div className="text-white flex gap-10">
                <button className="p-2 bg-orange-500 rounded-2xl w-20">Sign up</button>
                <button className="bg-zinc-700 p-2 rounded-2xl w-20">Log In</button>    
                </div>
                <div className="text-white">
                    <button className="fixed-button">Light Mode</button>
                </div>
            </div>
        </>
    )
}

export default Navbar