import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Messages from './Components/Messages/Messages';
import Contact from './Components/Contact/Contact';
import Quiz from './Components/Quiz/Quiz';
import { Routes, Route} from "react-router-dom";
import "./App.css";


function App() {


    return (
        <>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/messages" element={<Messages />}/>
            <Route path="/contact" element={<Contact />}/>
            
            </Routes>
        </>
    );
}

export default App;