import { useContext } from 'react';
import Cart from './Cart';
import { CartContext } from '../App';

const Product = () => {
  const { product } = useContext(CartContext);
  const mapData = () => {
    if (product.data) {
      let arr = [];
      if (product.category === 'all') {
        arr = product.data.filter(
          (product) => product.category != 'electronics'
        );
      } else {
        arr = product.data.filter((p) => p.category === product.category);
        console.log(arr);
      }
      return arr.map((product, index) => {
        return (
          <div
            key={index}
            className='flex flex-col items-center bg-white p-4 shadow-lg'
          >
            <div className='h-32 md:h-64 flex items-center'>
              <img src={product.image} alt=' ' className='w-20 md:w-36' />
            </div>
            <div className='text-sm text-center md:text-lg flex-grow'>
              <p>{product.title}</p>
              <p className='font-bold mt-3'>$ {product.price}</p>
            </div>
            <Cart productID={product.id} />
          </div>
        );
      });
    }
  };
  return <div className='product mt-7'>{mapData()}</div>;
};

export default Product;
