import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Messages from './Components/Messages/Messages';
import Contact from './Components/Contact/Contact';
import Quiz from './Components/Quiz/Quiz';
import Login from './Components/Login/Login';
import SignUp from './Components/signUp/SignUp';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductDetail from './Components/Products/ProductDetail';
import "./App.css";
import AddProduct from './Components/Products/AddProduct';


function App() {

    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/addProduct" element={<AddProduct />} />
            </Routes>
        </>
    );
}

export default App;