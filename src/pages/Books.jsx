import { ThemeContextProvider } from '../contexts/ThemeContext'
import { AuthContextProvider } from '../contexts/AuthContext'
import { BookContextProvider } from '../contexts/BookContext'
import Navbar from '../components/Navbar'
import BookList from '../components/BookList'
import ThemeToggle from '../components/ThemeToggle'

function Books() {
  return (
    <ThemeContextProvider>
        <AuthContextProvider>
            <div className="App">
                <Navbar />
                <BookContextProvider>
                    <BookList />
                </BookContextProvider>
                <ThemeToggle />
            </div>
        </AuthContextProvider>
    </ThemeContextProvider>
  )
}

export default Books