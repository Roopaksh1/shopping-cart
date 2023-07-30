import { PropTypes } from 'prop-types';
import Counter from './Counter';

const Cart = ({ productID, cart, setCart, setInCart, data }) => {
  const addToCart = () => {
    const arr = [...cart];
    arr.push({
      id: productID,
      count: 1,
      image: data[productID - 1].image,
      title: data[productID - 1].title,
      price: data[productID - 1].price,
    });
    setCart(arr);
    setInCart((prevState) => prevState + 1);
  };

  const addItem = (e) => {
    let element = e.target.tagName === 'I' ? e.target.parentNode : e.target;
    const arr = [...cart];
    arr.forEach((product) => {
      if (product.id == element.getAttribute('data-id')) {
        product.count += 1;
      }
    });
    setCart(arr);
  };

  const removeItem = (e) => {
    let element = e.target.tagName === 'I' ? e.target.parentNode : e.target;
    const arr = [...cart];
    arr.forEach((product) => {
      if (product.id == element.getAttribute('data-id')) {
        product.count = Math.max(1, product.count - 1);
      }
    });
    setCart(arr);
  };

  const isInCart = () => {
    let arr = [...cart];
    for (let product of arr) {
      if (product.id === productID) {
        return true;
      }
    }
  };

  const getCount = () => {
    let arr = [...cart];
    for (let product of arr) {
      if (product.id === productID) {
        return product.count;
      }
    }
  };

  return isInCart() ? (
    <Counter
      addItem={addItem}
      removeItem={removeItem}
      count={getCount()}
      id={productID}
    />
  ) : (
    <button
      onClick={addToCart}
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
  cart: PropTypes.array,
  setCart: PropTypes.func,
  setInCart: PropTypes.func,
  data: PropTypes.array,
};
