import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-5 md:flex justify-between md:max-w-5xl md:mt-24">
      <div className="flex flex-col md:justify-center items-center text-center md:text-start md:items-start gap-5">
        <p className="tracking-widest text-xl md:mb-4">Best Online Store Of The Year</p>
        <p className="text-4xl font-bold font-poppins md:mb-4">
          We don't do fashion, we are fashion
        </p>
        <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-xl hover:scale-110 transition-all hidden md:block">
          <Link to={'shop'}>Shop Now</Link>
        </button>
      </div>
      <div className="mt-4 md:mt-0 max-w-md mx-auto">
        <img
          src="src/assets/images/shopping_img.png"
          alt=" "
          className="rounded-xl"
        />
      </div>
      <div className='md:hidden flex justify-center'>
        <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-xl hover:scale-110 transition-all mt-4">
          <Link to={'shop'}>Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
