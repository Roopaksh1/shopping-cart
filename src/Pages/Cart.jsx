import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Counter from '../components/Counter';

const Cart = ({ cart, setCart, setInCart }) => {
  const removeFromCart = (e) => {
    const arr = cart.filter(
      (product) => product.id != e.target.getAttribute('data-id')
    );
    setCart(arr);
    setInCart((prevState) => prevState - 1);
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

  const mapCart = () => {
    return cart.map((product, index) => {
      return (
        <div
          key={index}
          className="border-b-2 p-3 w-full md:flex md:gap-10 md:hover:shadow-[7px_0px_2px_0px_#e8e8e8]"
        >
          <div className="flex justify-center">
            <img src={product.image} alt=" " className="w-20" />
          </div>
          <div className="text-center md:flex md:flex-col md:justify-center gap-4 md:flex-grow md:font-normal">
            <p className='md:text-lg text-center'>{product.title}</p>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10 md:items-center">
              <p className="font-bold mt-3 md:hidden">$ {product.price}</p>
              <Counter
                addItem={addItem}
                removeItem={removeItem}
                count={product.count}
                id={product.id}
              />
              <p className="font-bold hidden md:block md:flex-grow">
                $ {product.price}
              </p>
              <button
                data-id={product.id}
                onClick={removeFromCart}
                className="py-1 px-2 rounded-lg cursor-pointer hover:bg-red-400 bg-red-300 self-stretch"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  const getTotal = () => {
    let total = 0;
    for (let product of cart) {
      total += product.price * product.count;
    }
    return Math.round(total * 100) / 100;
  };

  return cart.length === 0 ? (
    <div className=" h-[calc(100vh-10rem)] flex justify-center items-center flex-grow">
      <div className="text-2xl container mx-auto p-6 text-center bg-white max-w-fit rounded-2xl hover:shadow-xl md:p-16">
        <p className="mb-20 font-bold font-sans">
          Your cart is empty! Click below to start shopping.
        </p>
        <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-xl hover:scale-110 transition-all mt-4">
          <NavLink to={'/shop'}>Shop Now</NavLink>
        </button>
      </div>
    </div>
  ) : (
    <main className="container mx-auto p-4 flex flex-col gap-4 md:flex-row md:justify-center md:gap-20 flex-grow">
      <div className="font-semibold text-xl md:flex md:flex-col md:gap-10 md:w-[42rem]">
        <div className="flex justify-between md:text-2xl">
          <p>Your Shopping Cart</p>
          <p>
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
          </p>
        </div>
        <div className="bg-white rounded-xl flex flex-col items-center gap-4 hidden md:block">
          {mapCart()}
        </div>
      </div>
      <div className="bg-white rounded-xl flex flex-col items-center gap-4 md:hidden">
        {mapCart()}
      </div>
      <div className="bg-white p-2 flex flex-col gap-10 md:self-start md:rounded-2xl md:p-3">
        <div className="flex justify-between font-bold md:text-2xl">
          <p>Estimated Total</p>
          <p>$ {getTotal()}</p>
        </div>
        <button className="bg-green-600 text-white rounded-full py-1 text-xl hover:bg-green-800 transition-colors">
          <NavLink to={'/'}>Proceed To Checkout</NavLink>
        </button>
        <div className="bg-white">
          <img src="/src/assets/images/payment.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  setInCart: PropTypes.func,
};
