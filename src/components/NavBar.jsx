import { NavLink, Outlet } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const NavBar = ({ inCart }) => {
  const showNavbar = () => {
    document.querySelector('header .navbar').classList.toggle('hidden');
  };

  return (
    <>
      <header className="p-4 bg-black flex justify-between font-bold sticky top-0 font-serif">
        <h1 className="text-3xl text-white">Fake Store</h1>
        <div className="mobile text-white md:hidden">
          <NavLink
            className="text-2xl relative top-0.4 hover:scale-125 inline-block"
            to={'cart'}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{inCart}</div>
          </NavLink>
          <button
            onClick={showNavbar}
            className="text-2xl ml-9 transition-all hover:scale-125"
          >
            <i className="fa-solid fa-list"></i>
          </button>
        </div>
        <div className="navbar hidden md:block fixed top-20 right-1 md:static text-white bg-black p-3 ">
          <nav className="text-base flex flex-col gap-5 md:block md:text-xl">
            <NavLink
              onClick={showNavbar}
              className="align-middle hover:scale-125 inline-block transition-all"
              to={'/'}
            >
              Home
            </NavLink>
            <NavLink
              onClick={showNavbar}
              className="align-middle md:ml-5 hover:scale-125 inline-block transition-all"
              to={'shop'}
            >
              Shop
            </NavLink>
            <NavLink
              onClick={showNavbar}
              className="align-middle md:ml-5 hover:scale-125 inline-block transition-all"
              to={'about'}
            >
              About
            </NavLink>
            <NavLink
              className="relative top-1 hidden md:inline-block md:ml-5 hover:scale-125 transition-all"
              to={'cart'}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{inCart}</div>
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  inCart: PropTypes.number,
}
