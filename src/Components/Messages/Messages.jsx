import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Navbar from "../Home/Navbar";

function Messages() {   
    const theme = useSelector((state) => state.theme.theme);

    const [activeMessage, setActiveMessage] = useState(null);

    const messages = [
        { id: 1, name: "Shehryar Ahmed", message: "Hi! I wanted to track my order #12345, can you help me?", time: "2:30 PM", status: "Delivered", type: "order", avatar: "https://avatars.githubusercontent.com/u/154340943?v=4" },
        { id: 2, name: "Shahab Uddin", message: "Do you have any discount offers at the moment?", time: "1:45 PM", status: "Seen", type: "inquiry", avatar: "https://avatars.githubusercontent.com/u/154582528?v=4" },
        { id: 3, name: "Siddique Ahmed", message: "Your order #98765 has shipped! Use this link to track it: [link]", time: "11:00 AM", status: "Sent", type: "support", avatar: "https://avatars.githubusercontent.com/u/153608121?v=4" },
        { id: 4, name: "Shehzad Iqbal", message: "I need to return my recent purchase, how do I do that?", time: "9:00 AM", status: "Replied", type: "inquiry", avatar: "https://avatars.githubusercontent.com/u/93990677?v=4" },
    ];

    const handleMessageClick = (id) => {
        const message = messages.find((msg) => msg.id === id);s
        setActiveMessage(message);
    };

    return (
        <>
            <Navbar />
            <div className={`p-6 md:p-10 ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"}`}>
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-semibold">Messages</h1>
                </div>

                <div className="space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            onClick={() => handleMessageClick(message.id)}
                            className={`flex justify-between items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${activeMessage?.id === message.id ? 'bg-gray-600' : ''}`}
                        >
                            <div className="flex items-center space-x-4">
                                <img src={message.avatar} alt={message.name} className="w-12 h-12 rounded-full" />
                                <div>
                                    <div className="text-lg font-medium text-white">{message.name}</div>
                                    <div className="text-sm text-gray-400">{message.message}</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="text-sm text-gray-400">{message.time}</div>
                                <div
                                    className={`text-sm ${message.status === "Sent" ? "text-yellow-500" : message.status === "Delivered" ? "text-orange-500" : message.status === "Replied" ? "text-orange-500" : "text-gray-500"}`}
                                >
                                    {message.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {activeMessage && (
                    <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-white">{activeMessage.name}</h2>
                        <p className="text-gray-300 mt-4">{activeMessage.message}</p>
                        {activeMessage.type === 'order' && (
                            <div className="mt-4">
                                <p className="text-gray-400">Order details: You can track your order here: [Link]</p>
                            </div>
                        )}
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex gap-4">
                                <button className="flex items-center text-yellow-500">
                                    <AiOutlineCheck className="mr-2" /> Mark as Read
                                </button>
                                <button className="flex items-center text-red-500">
                                    <AiOutlineClose className="mr-2" /> Archive
                                </button>
                            </div>
                            <div className="text-gray-500">{activeMessage.time}</div>
                        </div>
                    </div>
                )}

                {/* Fixed position input field and icon */}
                <div className="fixed top-36 right-0 w-80 bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Type Your Message"
                        />
                        <div className="absolute right-3 top-2 flex items-center justify-center">
                            <i className="fas fa-paper-plane text-white text-xl cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messages;