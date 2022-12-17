import { createContext, useState } from "react";


export const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {
    const [isLightTheme, setIsLightTheme ] = useState(true);
    const [light, setLight ] = useState({syntax: '#555', ui: '#ddd', bg: '#eee'});
    const [dark, setDark ] = useState({syntax: '#ddd', ui: '#333', bg: '#555'});

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    const exposed = {
        isLightTheme, light, dark, toggleTheme
    }

    return (
        <ThemeContext.Provider value={exposed}>
            {children}
        </ThemeContext.Provider>
    )
}