import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Error from './components/Error';

const Router = ({ cart, setCart, inCart, setInCart }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar inCart={inCart} />,
      children: [
        { index: true, element: <Home /> },
        { path: '/contact', element: <Contact /> },
        {
          path: '/shop',
          element: <Shop cart={cart} setCart={setCart} setInCart={setInCart} />,
        },
        {
          path: '/cart',
          element: <Cart cart={cart} setCart={setCart} setInCart={setInCart} />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

Router.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  inCart: PropTypes.number,
  setInCart: PropTypes.func,
};
