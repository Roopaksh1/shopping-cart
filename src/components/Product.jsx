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
            className="flex flex-col items-center bg-white p-4 shadow-lg"
          >
            <div className="h-32 md:h-64 flex items-center">
              <img src={product.image} alt=" " className="w-20 md:w-36" />
            </div>
            <div className="text-sm text-center md:text-lg flex-grow">
              <p>{product.title}</p>
              <p className="font-bold mt-3">$ {product.price}</p>
            </div>
            <Cart
              productID={product.id}
              cart={cart}
              setCart={setCart}
              setInCart={setInCart}
              data={data}
            />
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
