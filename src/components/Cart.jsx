import { PropTypes } from 'prop-types';
import Counter from './Counter';
import { useContext } from 'react';
import { CartContext } from '../App';
import { addToCart, decreaseCount, increaseCount } from '../actions';

const Cart = ({ productID }) => {
  const { cart, handleCart, product } = useContext(CartContext);

  const isInCart = () => {
    let arr = [...cart.cart];
    for (let product of arr) {
      if (product.id === productID) {
        return true;
      }
    }
  };

  const getCount = () => {
    let arr = [...cart.cart];
    for (let product of arr) {
      if (product.id === productID) {
        return product.count;
      }
    }
  };

  return isInCart() ? (
    <Counter
      onAddItem={() => increaseCount(handleCart, productID)}
      onRemoveItem={() => decreaseCount(handleCart, productID)}
      count={getCount()}
      id={productID}
    />
  ) : (
    <button
      onClick={() => {
        addToCart(handleCart, {
          id: productID,
          count: 1,
          image: product.data[productID - 1].image,
          title: product.data[productID - 1].title,
          price: product.data[productID - 1].price,
        });
      }}
      id={productID}
      className="cursor-pointer bg-[#f6f6f6] text-black rounded-2xl p-2 text-sm hover:bg-black hover:text-white transition-colors border-2 lg:text-lg mt-auto"
    >
      <i className="fa-solid fa-cart-shopping"></i> Add to Cart
    </button>
  );
};

export default Cart;

Cart.propTypes = {
  productID: PropTypes.number,
  data: PropTypes.array,
};
