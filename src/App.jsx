import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div>
      <Link to={`books`}>Books</Link>
        <Outlet />
    </div>
  )
}

export default App
