import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  const showNavbar = () => {
    document.querySelector('header .navbar').classList.toggle('hidden');
  };

  return (
    <>
      <header className="p-4 bg-black flex justify-between font-mono font-bold sticky top-0">
        <h1 className="text-3xl text-white">Fake Store</h1>
        <div className="mobile text-white md:hidden">
          <Link
            className="text-2xl relative top-0.4 hover:scale-125 inline-block"
            to={'cart'}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <button
            onClick={showNavbar}
            className="text-2xl ml-9 transition-all hover:scale-125"
          >
            <i className="fa-solid fa-list"></i>
          </button>
        </div>
        <div className="navbar hidden md:block fixed top-20 right-1 md:static text-white bg-black p-3 ">
          <nav className="text-base flex flex-col gap-5 md:block">
            <Link
              onClick={showNavbar}
              className="align-middle hover:scale-125 inline-block transition-all"
              to={'/'}
            >
              Home
            </Link>
            <Link
              onClick={showNavbar}
              className="align-middle md:ml-5 hover:scale-125 inline-block transition-all"
              to={'shop'}
            >
              Shop
            </Link>
            <Link
              onClick={showNavbar}
              className="align-middle md:ml-5 hover:scale-125 inline-block transition-all"
              to={'about'}
            >
              About
            </Link>
            <Link
              className="relative top-1 hidden md:inline-block md:ml-5 hover:scale-125 transition-all"
              to={'cart'}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
