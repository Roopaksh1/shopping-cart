import { NavLink } from 'react-router-dom';
import shoppingImage from '../assets/images/shopping_img.png';
import { useTitle } from '../Utils/useTitle';

const Home = () => {
  useTitle('FakeStore - Home')
  return (
    <main className="container mx-auto p-5 md:flex justify-between md:max-w-5xl flex-grow">
      <div className="flex flex-col md:justify-center items-center text-center md:text-start md:items-start gap-5">
        <p className="tracking-widest text-xl md:mb-4 lg:text-3xl">
          Best Online Store Of The Year
        </p>
        <p className="text-3xl font-bold font-poppins md:mb-4 lg:text-6xl">
          We don&apos;t do fashion, we are fashion
        </p>
        <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-xl hover:scale-110 transition-all hidden md:block md:py-2 md:text-2xl">
          <NavLink to={'shop'}>Shop Now</NavLink>
        </button>
      </div>
      <div className="mt-4 md:mt-0 max-w-md mx-auto flex items-center">
        <img src={shoppingImage} alt=" " className="rounded-xl md:mb-5" />
      </div>
      <div className="md:hidden flex justify-center">
        <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-xl hover:scale-110 transition-all mt-4">
          <NavLink to={'shop'}>Shop Now</NavLink>
        </button>
      </div>
    </main>
  );
};

export default Home;
