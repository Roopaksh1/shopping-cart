import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PropTypes } from "prop-types";
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'

const Router = ({ cart, setCart, inCart, setInCart }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar inCart={inCart}/>,
      children: [
        {index: true, element: <Home />},
        {path: '/about', element: <About />},
        {path: '/shop', element: <Shop cart={cart} setCart={setCart} setInCart={setInCart} />},
        {path: '/cart', element: <Cart cart={cart} setCart={setCart} setInCart={setInCart} />},
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default Router;

Router.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  inCart: PropTypes.number,
  setInCart: PropTypes.func,
}