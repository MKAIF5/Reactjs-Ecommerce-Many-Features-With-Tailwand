import { createContext, useState } from 'react';
import Switcher from "./Components/Home/Switcher";
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import { Routes, Route} from "react-router-dom";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className={`app ${theme}`} id={theme}>
                    <Home />
                    <Switcher />

                </div>
            </ThemeContext.Provider>
        </>
    );
}

export default App;