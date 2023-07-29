import { PropTypes } from 'prop-types';
import Cart from './Cart';

const Product = ({ data, category, cart, setCart, setInCart }) => {
  const mapData = () => {
    if (data) {
      let arr = [];
      if (category === 'all') {
        arr = data.filter((product) => product.category != 'electronics');
      } else {
        arr = data.filter((product) => product.category === category);
      }
      return arr.map((product, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-white p-3"
          >
            <img src={product.image} alt=" " className="w-20 mt-auto md:w-36" />
            <div className="text-xs text-center mt-auto md:text-lg">
              <p>{product.title}</p>
              <p className="font-bold mt-3">$ {product.price}</p>
            </div>
            <Cart productID={product.id} cart={cart} setCart={setCart} setInCart={setInCart}/>
          </div>
        );
      });
    }
  };

  return <div className="product mt-7">{mapData()}</div>;
};

Product.propTypes = {
  data: PropTypes.array,
  category: PropTypes.string,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  setInCart: PropTypes.func,
};

export default Product;
