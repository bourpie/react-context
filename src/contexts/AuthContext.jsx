import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated)
    }
    const exposed = {
        isAuthenticated,
        toggleAuth,
    }
    return (
        <AuthContext.Provider value={exposed}>{children}</AuthContext.Provider>
    )
}

export default AuthContext