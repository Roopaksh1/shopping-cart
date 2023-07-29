import { PropTypes } from "prop-types";

const Cart = ({ productID, cart, setCart, setInCart }) => {
  const addItem = () => {
    const arr = [...cart];
    arr.push(productID);
    setCart(arr);
    setInCart((prevState) => prevState + 1);
  }

  return (
    <button
      onClick={addItem}
      id={productID}
      className="cursor-pointer bg-[#f6f6f6] text-black rounded-2xl p-2 text-sm hover:bg-black hover:text-white transition-colors border-2 lg:text-lg"
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
}