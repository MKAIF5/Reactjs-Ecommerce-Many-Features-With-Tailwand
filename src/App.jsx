import { createContext, useState } from 'react';
import Switcher from "./Components/Home/Switcher";
import "./App.css";
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';

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
                  <Home/>
                    <Switcher />

                </div>
            </ThemeContext.Provider>
            <Routes>
                   <Route path='/' index element={<Home/>}/>
                   <Route path='/' index element={<Quiz/>}/>
            </Routes>
        </>
    );
}

export default App;
