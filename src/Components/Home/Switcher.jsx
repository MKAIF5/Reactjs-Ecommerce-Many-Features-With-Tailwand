import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);


function Switcher() {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className='app' id={theme}>
                    <ReactSwitch className='fixed-button'
                        onChange={toggleTheme} checked={theme === "dark"} />
                </div>
            </ThemeContext.Provider >
        </>
    )
}

export default Switcher
