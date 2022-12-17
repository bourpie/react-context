import { Outlet, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <nav className="">
        <div className="flex gap-3 container mx-auto">
          <Link to='books'>Books</Link>
          <Link to='Songs'>Songs</Link>
          <Link to='bookapp'>Book List App</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default App
