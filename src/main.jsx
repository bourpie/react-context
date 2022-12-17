import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Books from './pages/Books'
import ErrorPage from './components/error-page'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SongList from './components/SongList'
import BookListApp from './pages/BookListApp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/songs",
    element: <SongList />
  },
  {
    path: "/bookapp",
    element: <BookListApp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
