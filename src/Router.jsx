import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Error from './components/Error';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> },
        { path: '/contact', element: <Contact /> },
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: '/cart',
          element: <Cart />,
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
