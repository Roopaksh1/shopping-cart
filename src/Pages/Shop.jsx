import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Product from '../components/Product';

const Shop = ({ cart, setCart, setInCart }) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (isLoading || !data) ? (
    <div className="flex justify-center items-center flex-grow">
      <i className="fa-solid fa-spinner animate-spin text-8xl"></i>
    </div>
  ) : (
    <>
      <div className="container p-6 mx-auto max-w-7xl flex-grow">
        <h2 className="text-2xl p-4 md:text-3xl">Shop</h2>
        <select
          onInput={changeCategory}
          name="category"
          className=".appearance-none .cursor-pointer outline-none font-bold border-0 border-b-2 md:text-lg p-1"
        >
          <option value="all" defaultValue>
            All
          </option>
          <option value="men's clothing">Men&apos;s Clothing</option>
          <option value="women's clothing">Women&apos;s Clothing</option>
          <option value="jewelery">Jewelry</option>
        </select>
        <main>{<Product data={data} category={category} cart={cart} setCart={setCart} setInCart={setInCart}/>}</main>
      </div>
    </>
  );
};

export default Shop;

Shop.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  setInCart: PropTypes.func,
};
