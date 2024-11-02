import { createContext, useState } from 'react';
import Navbar from "./Components/Home/Navbar";
import Body from "./Components/Home/Body";
import Switcher from "./Components/Home/Switcher";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app ${theme}`} id={theme}>
                <Navbar />
                <Body />
                <Switcher />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
