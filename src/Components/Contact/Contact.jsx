import { useState } from "react";
import Navbar from "../Home/Navbar";
import { useSelector } from "react-redux";

function Contact() {
    const theme = useSelector((state) => state.theme.theme);
   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};
        if (!formData.name) validationErrors.name = "Name is required!";
        if (!formData.email) validationErrors.email = "Email is required!";
        if (!formData.message) validationErrors.message = "Message cannot be empty!";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitted(false);
            setIsError(true);
        } else {
            setErrors({});
            setIsSubmitted(true);
            setIsError(false);
            console.log("Form data submitted:", formData);
        }
    };



    return (
        <>
            <Navbar />
            <div>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-md">
                        {isSubmitted && !isError && (
                            <div className="text-green-600 text-center mb-4">Thank you for contacting us! We will get back to you soon.</div>
                        )}
                        {isError && (
                            <div className="text-red-600 text-center mb-4">Please fill out all fields correctly!</div>
                        )}

                        <form onSubmit={handleSubmit} className={`space-y-6 p-6 rounded-lg shadow-md text-white ${theme === "dark" ? "bg-black" : "bg-gray-300"}`}>
                            <div className="flex justify-center">
                                <p  className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Contact US</p>
                            </div>
                            <div className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div  className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div  className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <div  className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
