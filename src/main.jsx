import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Cart from './components/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {index: true, element: <Home />},
      {path: '/about', element: <About />},
      {path: '/shop', element: <Shop />},
      {path: '/cart', element: <Cart />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
