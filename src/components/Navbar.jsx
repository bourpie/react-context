import  { useContext }  from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from "react-router-dom";

function Navbar() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  const { isLightTheme, light, dark } = themeContext;
  const { isAuthenticated, toggleAuth } = authContext

  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
        {`${isAuthenticated ? "Logged in" : "Logged out"}`}
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar