import { useContext, useEffect } from 'react';
import Product from '../components/Product';
import { useTitle } from '../Utils/useTitle';
import { CartContext } from '../App';

const Shop = () => {
  useTitle('FakeStore - Shop');
  const { product, handleProduct } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) =>
        handleProduct({
          type: 'data_fetched',
          payLoad: data,
        })
      )
      .catch((err) =>
        handleProduct({
          type: 'error',
          payLoad: err,
        })
      )
      .finally(
        handleProduct({
          type: 'loaded',
        })
      );
  }, [handleProduct]);

  const changeCategory = (e) => {
    handleProduct({
      type: 'category_changed',
      payLoad: e.target.value,
    });
  };
  
  return product.loading || !product.data ? (
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
        <main>{<Product />}</main>
      </div>
    </>
  );
};

export default Shop;
